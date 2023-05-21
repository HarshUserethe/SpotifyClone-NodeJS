var mongoose = require("mongoose");
mongoose.set("strictQuery", true);

//  mongoose.connect("mongodb://localhost/SpotifyUsers").then(function(){
//   console.log("Connected to Database!");
// })

var songSchema = mongoose.Schema({
  songname: String,
  songdesc: String,
  songimage: String,
  track: String,
  artist: String,
  lyrics: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("song", songSchema);
