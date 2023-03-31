const User = require('../services/users')

const Auth = {

    async private (req, res, next) {

        // Se não veio no input hidden manda pra fora da aplicação desloga
        if(!req.body.token){
            res.redirect('/')
            return
        }

        let token = req.body.token

        // se o token que eu peguei ta vazio eu paro a requisição aqui
        if(token == ''){
            res.redirect('/')
            return
        }

        // verefica se existe usuario logado com pelo token
        const user = await User.findByToken(token)

        // se não foi encontrado um token no banco paro a requisiçao aqui
        if(!user){
            res.redirect('/')
            return
        }

        // se foi encontrado um token valido no banco a rota prossegue
        next()
    }

}

module.exports = Auth