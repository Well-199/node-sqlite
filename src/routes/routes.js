const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller')

router.get('/email/:email', Controller.findByEmailUser)

module.exports = router