const express = require('express')
const router = express.Router()

const Auth = require('../middlewares/Auth')

const LoginController = require('../controllers/loginController')
const HomeController = require('../controllers/homeController')

router.get('/', LoginController.Login)

router.post('/login', LoginController.ValidaLogin)

router.post('/sair', Auth.private, LoginController.logout)

module.exports = router