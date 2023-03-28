const SqliteConnection = require('../config/connection')

const Service = {

    // Busca um usuario pelo email
    findByEmail: async (email) => {

        const open = await SqliteConnection()

        const query = await open.all(`
            SELECT * FROM usuarios WHERE email=?`, [email]
        )
        return query[0]        
    },


}

module.exports = Service