import mongoose from 'mongoose'

const Schema = mongoose.Schema

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