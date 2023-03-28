const Service = require('../services/service')


const Controller = {

    async findByEmailUser (req, res) {

        let email = req.params.email

        const user = await Service.findByEmail(email)

        res.json({data: true, result: user})
    }

}

module.exports = Controller