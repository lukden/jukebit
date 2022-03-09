import { Playlist } from "../models/playlist.js"

function newPlaylist(req, res) {
  res.render('playlists/new', {
    title: 'Add Playlist',
  })
}

function create(req,res) {
  req.body.owner = req.user.profile._id
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  const playlist = new Playlist (req.body)
  playlist.save(function(err) {
    if (err) return res.render ('playlists/new')
    res.redirect('/playlists')
  })
}

function index(req, res) {
  Playlist.find({}, function (err, playlists) {
    res.render('playlists/index', {
      err: err,
      playlists: playlists,
      title: 'All Playlists'
    })
  })
}

function show(req, res){
  Playlist.findById(req.params.id)
  .populate('songs')
  .exec(function(err, playlist) {
    Playlist.find({_id: {$nin: playlist.songs}}, function(err, songs) {
      console.log(songs)
      res.render('playlists/show', {
        title: 'Playlist Details', 
        playlist: playlist,
      }) 
    })
  })
}

function deletePlaylist(req, res) {
  Playlist.findByIdAndDelete(req.params.id, function(err, playlist) {
    res.redirect('/playlists')
  })
}

function edit(req, res) {
  Playlist.findById(req.params.id)
  .then(playlist => {
    res.render('playlists/edit', {
      playlist,
      title: "Edit Playlist"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/playlists')
  })
}



function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Playlist.findByIdAndUpdate(req.params.id, req.body, function(err, playlist) {
    res.redirect(`/playlists/${playlist._id}`)
  })
}

function addToPlaylist(req, res) {
  Playlist.findById(req.params.id, function(err, playlist) {
    playlist.songs.push(req.body)
    console.log("Updated Playlist", playlist)
    playlist.save(function(err) {
      res.redirect(`/playlists/${playlist._id}`)
    })
  })
}

export {
  newPlaylist as new,
  create,
  index,
  show,
  update,
  addToPlaylist,
  edit,
  deletePlaylist as delete,
}