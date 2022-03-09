import { Router } from 'express'

const router = Router()

router.get('/', function(req, res) {
  res.render('index', { title: 'Jukebit', user: req.user ? req.user : null })
})

export {
  router
}
