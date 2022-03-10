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
    type: Number,
  },
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
}, {
  timestamps: true,
})

const Song = mongoose.model('Song', songSchema)

const playlistSchema = new Schema ({
  name: {
    type: String
  },
  description: {
    type: String
  },
  songs: [songSchema],
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
}, {
  timestamps: true,
})


const Playlist = mongoose.model('Playlist', playlistSchema)

export {
  Playlist,
  Song,
}