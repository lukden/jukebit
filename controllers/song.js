import { Song } from "../models/song"

function addSong(req, res) {
  res.render('songs/new', {
    title: 'Add Song'
  })
}

function create(req,res) {
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  const song = new Song (req.body)
  song.save(function(err) {
    if (err) return res.render ('songs/new')
    res.redirect('/songs')
  })
}

function index(req, res) {
  Song.find({}, function (err, songs) {
    res.render('songs/index', {
      err: err,
      songs: songs,
      title: 'All Playlists'
    })
  })
}

