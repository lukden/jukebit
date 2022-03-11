import mongoose from 'mongoose'

const bioSchema = new mongoose.Schema({
  biography: String,
})

const Bio = mongoose.model('Bio', bioSchema)

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  bios: [bioSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile,
  Bio
}
