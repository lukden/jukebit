import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

// GET - localhost:3000/profiles
router.get("/", isLoggedIn, profilesCtrl.index)
// GET - localhost:3000/profiles/:id
router.get("/:id", isLoggedIn, profilesCtrl.show)

router.get('/:id/edit', isLoggedIn, profilesCtrl.addBio)
// POST - localhost:3000/profiles/:id/cats
// router.post("/:id/cats", isLoggedIn, profilesCtrl.createCat)

// DELETE - localhost:3000/profiles/cats/:id
// router.delete("/:profileId/cats/:catId", isLoggedIn, profilesCtrl.deleteCat)

export {
  router
}