import { Router } from 'express'
const router = Router()
import * as playlistsCtrl from '../controllers/playlist.js'


/* GET users listing. */

router.get('/new', playlistsCtrl.new)

router.get('/', playlistsCtrl.index)

router.get('/:id', playlistsCtrl.show)

router.post('/', playlistsCtrl.create)

router.delete('/:id', playlistsCtrl.delete)

router.get('/:id/edit', playlistsCtrl.edit)

router.put('/:id', playlistsCtrl.update)

router.post('/:id/songs', playlistsCtrl.addToPlaylist)





export {
  router
}
