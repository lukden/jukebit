import { Router } from 'express'
const router = Router()
import * as playlistsCtrl from '../controllers/playlist.js'
import { isLoggedIn } from '../middleware/middleware.js'


/* GET users listing. */

router.get('/new', playlistsCtrl.new)

router.get('/', playlistsCtrl.index)

router.get('/:id', playlistsCtrl.show)

router.post('/', playlistsCtrl.create)

router.delete('/:id', isLoggedIn, playlistsCtrl.delete)

router.delete('/:id/:songId', playlistsCtrl.deleteSong)

router.get('/:id/edit', isLoggedIn, playlistsCtrl.edit)

router.post('/:id/songs', playlistsCtrl.addToPlaylist)

router.put('/:id', playlistsCtrl.update)

export {
  router
}
