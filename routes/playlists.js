import { Router } from 'express'
const router = Router()
import * as playlistsCtrl from '../controllers/playlist.js'
import { isLoggedIn } from '../middleware/middleware.js'
import { Playlist } from '../models/playlist.js'


/* GET users listing. */

router.get('/new', playlistsCtrl.new)

router.get('/', playlistsCtrl.index)

router.get('/:id', playlistsCtrl.show)

router.post('/', playlistsCtrl.create)

router.delete('/:id', playlistsCtrl.delete)

router.get('/:id/edit', isLoggedIn, playlistsCtrl.edit)

router.put('/:id', playlistsCtrl.update)

router.post('/:id/songs', playlistsCtrl.addToPlaylist)

// router.put('/:id/up', (req, res) => {
//   Playlist.findById(req.params.id).then((err, playlistsCtrl) => {
//     playlistsCtrl.upVote.push(req.user._id)
//     playlistsCtrl.voteScore += 1
//     playlistsCtrl.save()

//     return res.status(200)
//   })
// })

// router.put('/:id/down', (req, res) => {
//   Playlist.findById(req.params.id).then((err, playlistsCtrl) => {
//     playlistsCtrl.downVote.push(req.user._id)
//     playlistsCtrl.voteScore -= 1
//     playlistsCtrl.save()

//     return res.status(200)
//   })
// })





export {
  router
}
