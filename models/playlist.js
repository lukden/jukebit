import mongoose from 'mongoose'

const Schema = mongoose.Schema

const songSchema = new Schema ({
  songTitle: {
    type: String
  },
  artist: {
    type: String
  },
  album: {
    type: String
  },
  releaseYear: {
    type: Date,
  }
})

const playlistSchema = new Schema ({
  name: {
    type: String
  },
  songs: [songSchema],
})




const Playlist = mongoose.model('Playlist', playlistSchema)

export {
  Playlist
}