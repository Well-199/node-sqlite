const User = require('../services/users')
const bcrypt = require('bcrypt')

const LoginController = {

    async Login (req, res) {
        res.render('login')
    },

    async ValidaLogin (req, res) {

        let email = req.body.email
        let senha = req.body.senha

        if(!email || !senha){
            res.render('login')
            return
        }

        const usuario = await User.findByEmail(email.trim())

        if(!usuario){
            res.render('login', { error: true, message: 'E-mail e/ou senha errados' })
            return
        }

        // Validando a senha
        const match = await bcrypt.compare(senha, usuario.senha)
        if(!match){
            res.render('login', { error: true, message: 'E-mail e/ou senha errados' })
            return
        }

        // Gera um token de sessão para o usuario logado
        const payload = (Date.now() + Math.random()).toString()
        const token = await bcrypt.hash(payload, 10)

        // insere um token na sessão
        await User.pushToken(token, parseInt(usuario.id))

        res.json({ data: true, token: token })
    },

    async logout (req, res) {

        let token = req.body.token

        // verefica se existe usuario logado com pelo token
        const usuario = await User.findByToken(token)

        // se não foi encontrado um token no banco paro a requisiçao aqui
        if(!usuario){
            res.redirect('/')
            return
        }

        await User.deleteToken(parseInt(usuario.id))

        res.redirect('/')
    }

}

module.exports = LoginController