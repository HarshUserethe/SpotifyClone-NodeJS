/* NPM PACKAGES AND DEPENDENCIES */

var express = require("express");
var router = express.Router();
var passport = require("passport");
var mongoose = require("mongoose");
require("dotenv").config();
const localStrategy = require("passport-local");
// const { findOne } = require('./users');
var userModel = require("./users");
var songModel = require("./song");
var playlistModel = require("./playlist");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var findOrCreate = require("mongoose-findorcreate");
var flash = require("connect-flash");
const Grid = require("gridfs-stream");
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");
const song = require("./song");

const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: process.env.TEST_KEY_ID,
  key_secret: process.env.TEST_SECRETE_ID,
});

router.get("/payment", function (req, res) {
  var options = {
    amount: 5000 * 100, // amount in the smallest currency unit
    currency: "INR",
    // receipt: "order_rcptid_11"
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      console.log(err);
    } else {
      console.log(order);
      res.send(order.id);
    }
  });
});

//GOOGLE Oauth

//Configure Strategy -------------->
// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:3000/auth/google/callback"
// },
// function(accessToken, refreshToken, profile, done) {

//   // Save user data to database or retrieve existing user
//   const user = {
//     id: profile.id,
//     name: profile.displayName,
//     email: profile.emails[0].value
//   };
//   done(null, user);
// }
// ));

// // Serialize and deserialize the user to the session
// passport.serializeUser((user, cb) => {
//   cb(null, user);
// });

// passport.deserializeUser((user, cb) => {
//   cb(null, user);
// });

// // Set up the Google authentication routes
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//   let user =  req.user

//   res.render('home', {user}); // Successful authentication, redirect home.
// });

/* CONNECT SERVER WITH MONGODB */

mongoose.connect(
  "mongodb+srv://harshuserethe:" +
    process.env.MONGO_PASSWORD +
    "@cluster0.hg0kpav.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
var gfs;
mongoose.connection.once("open", () => {
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
  gfs.collection("audio_files"); // Create a new GridFS collection
  console.log("MongoDB connected!");
});

//CREATING BUCKET
var bucket;
mongoose.connection.on("connected", () => {
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket",
  });
});

// CREATE GridFS STORAGE ENGINE
const storage = new GridFsStorage({
  url:
    "mongodb+srv://harshuserethe:" +
    process.env.MONGO_PASSWORD +
    "@cluster0.hg0kpav.mongodb.net/?retryWrites=true&w=majority",
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: "newBucket",
       
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

/* LOCAL PASSPORT STRATEGY */

passport.use(
  new localStrategy(
    {
      usernameField: "email",
    },
    userModel.authenticate()
  )
);

/* REGISTER ROUTE */

router.post("/register", function (req, res, next) {
  var usersRouter = new userModel({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
  });
  userModel.register(usersRouter, req.body.password).then(function (dets) {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/home");
    });
  });
});

//redirecting middleware

/* MIDDLEWARE */

//  function redirectToProfile (req, res, next){
//    if(req.isAuthenticated()){
//      res.redirect('/home');
//    }
//    else{
//      return next();
//    }
//  }

/* LOGIN ROUTE */

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true,
  }),
  function (req, res, next) {
    req.flash("error", "Invalid Email or Password");
    res.redirect("/");
  }
);

/* REGISTER-LOGIN PAGE ROUTE */
router.get("/", function (req, res, next) {
  res.render("login", { message: req.flash("error") });
});

/* LOGOUT ROUTE */

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

/* MIDDLEWARE */

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
}

// router.get('/', (req, res, next) => {
//   res.render('index');
// });

/* HOME PAGE ROUTE */

router.get("/home", isLoggedIn, async (req, res, next) => {
  let user = await userModel.findOne({ email: req.session.passport.user });
  let create = req.flash("create");
  res.render("home", { user, create });
});

/* SEARCH PAGE ROUTE */

router.get("/search-page", isLoggedIn, async (req, res, next) => {
  let user = await userModel.findOne({ email: req.session.passport.user });
  res.render("search", { user });
});

router.get("/search", async (req, res, next) => {
  const searchTerm = req.query.q;
  const regex = new RegExp(searchTerm, "i");
  let songname = await songModel.find({ songname: regex });
  res.json(songname);
});

router.get("/searchsong", async (req, res, next) => {
  const searchTerm = req.query.q;
  const regex = new RegExp(searchTerm, "i");
  let user = await userModel.findOne({ email: req.session.passport.user });
  let newsong = await songModel.find({ songname: regex });
  console.log(newsong);
  res.render("searchsong", { newsong, user });
});

/* SHOW PLAYLIST PAGE ROUTE */

router.get("/collection/playlist", isLoggedIn, (req, res, next) => {
  res.json("show playlist");
});

/* CREATE PLAYLIST PAGE ROUTE */

router.get("/create/playlist", isLoggedIn, (req, res, next) => {
  res.json("create playlist");
});

/* UPLOADING MUSIC USING THIS ROUTE */

router.post("/upload", upload.single("file"), async (req, res) => {
  var user = await userModel.findOne({ email: req.session.passport.user });
  var data = {
    userid: user._id,
    songname: req.body.songname,
    songdesc: req.body.songdesc,
    songimage: req.body.songimage,
    artist: req.body.artist,
  };
  const result = await songModel.create(data);

  user.songs.push(result._id);
  await user.save();
  req.flash("create", "Your song has been successfully uploaded");
  res.redirect("/home");
});

/* UPLOADING MUSIC PAGE*/
router.get("/uploadfile", isLoggedIn, (req, res) => {
  res.render("upload");
});

/* ALL MUSIC CREATED BY A LOGGED IN USER */
router.get("/library", isLoggedIn, async (req, res, next) => {
  let user = await userModel.findOne({ email: req.session.passport.user });
  let allSongs = await songModel.find({ userid: req.user._id });
  let update = req.flash("update");
  let dlt = req.flash("delete");
  res.render("library", { user, allSongs, update, dlt });
});

/* STREAM MUSIC USING BELOW ROUTE */

// router.get('/stream/:filename', (req, res) => {
//   const { filename } = req.params;
//   const readStream = bucket.openDownloadStreamByName(filename);
//   readStream.pipe(res);
// });

router.get("/songsapi", (req, res, next) => {
  songModel.find({}, function (err, data) {
    res.json(data);
  });
});

router.get("/trackapi", async function (req, res, next) {
  const track = await bucket.find().toArray();
  res.json(track);
});

router.get("/play/track/:filename", async function (req, res, next) {
  const songID = req.params.filename;
  console.log(songID);

  const { filename } = req.params;
  const readStream = await bucket.openDownloadStreamByName(filename);
  await readStream.pipe(res);
});

/* EDIT SONG FILE ROUTE*/
router.get("/edit/:musicid", isLoggedIn, async (req, res, next) => {
  let user = await userModel.findOne({ email: req.session.passport.user });
  let song = await songModel.findOne({ _id: req.params.musicid });

  res.render("edit", { user, song });
});

router.post("/edit/song/:musicid", isLoggedIn, async (req, res, next) => {
  let songupdate = await songModel.findOneAndUpdate(
    { _id: req.params.musicid },
    {
      songname: req.body.songname,
      songdesc: req.body.songdesc,
      songimage: req.body.songimage,
      artist: req.body.artist,
    },
    { new: true }
  );

  req.flash("update", "Song edit successfully!");
  res.redirect("/library");
});

router.get("/delete/:songid", isLoggedIn, async (req, res, next) => {
  let songDelete = await songModel.findOneAndDelete({ _id: req.params.songid });
  req.flash("delete", "Song removed from your library");
 // Delete file from GridFS
  res.redirect("/library");
});

router.get("/album", isLoggedIn, async (req, res, next) => {
  let user = await userModel.findOne({ email: req.session.passport.user });
  res.render("album", { user });
});

router.get("/subscription", async (req, res, next) => {
  res.render("payment");
});

module.exports = router;
