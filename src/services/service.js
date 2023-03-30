const connection = require('../config/connection')

let db = false
// Inicia o banco de dados
async function openDataBase() {
    const database = await connection()
    db = database
}
openDataBase()

const Service = {

    // Busca um usuario pelo email
    findByEmail: async () => {
        const query = await db.all(`
            SELECT * FROM usuarios`
        )
        return query
    },

}

module.exports = Service