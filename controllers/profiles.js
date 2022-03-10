import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('bio')
  .then(profile => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        profile,
        isSelf,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function addBio(req, res) {
  Profile.findById(req.params.id, function(err, profile) {
    profile.bio.push(req.body)
    console.log("Updated Bio", profile)
    profile.save(function(err) {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
}

export {
  index,
  show,
  addBio
}