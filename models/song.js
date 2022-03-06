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
    default: function() {
      return new Date.now() + 365*24*60*60*1000
    }
  }
})

const Song = mongoose.model('Song', songSchema)

export {
  Song
}