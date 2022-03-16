import mongoose from 'mongoose'

const Schema = mongoose.Schema

const songSchema = new Schema ({
  songTitle: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  album: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
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
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
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