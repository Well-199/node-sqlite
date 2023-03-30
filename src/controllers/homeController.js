const Service = require('../services/service')

const HomeController = {

    async home (req, res) {

        const user = await Service.findByEmail()

        console.log(user)

        res.render('home')
    }

}

module.exports = HomeController