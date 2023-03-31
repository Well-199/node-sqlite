const Service = require('../services/service')

const HomeController = {

    async home (req, res) {
        res.render('home')
    }

}

module.exports = HomeController