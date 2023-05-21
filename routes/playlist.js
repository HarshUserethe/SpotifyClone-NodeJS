var mongoose = require("mongoose");
mongoose.set("strictQuery", true);

//  mongoose.connect("mongodb://localhost/SpotifyUsers").then(function(){
//   console.log("Connected to Database!");
// })

var playlistSchema = mongoose.Schema({
  name: String,
  thumbnail: String,

  songs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "song",
    },
  ],

  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },

  collabs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("playlist", playlistSchema);
