var mongoose = require("mongoose");
var plm = require("passport-local-mongoose");
var findOrCreate = require("mongoose-findorcreate");

mongoose.set("strictQuery", true);

//  mongoose.connect("mongodb://localhost/SpotifyUsers").then(function(){
//   console.log("Connected to Database!");
// })

var userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "song",
    },
  ],
});

userSchema.plugin(plm, { usernameField: "email" });
userSchema.plugin(findOrCreate);
module.exports = mongoose.model("user", userSchema);
