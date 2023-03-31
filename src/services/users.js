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
    findByEmail: async (email) => {
        const query = await db.all(`
            SELECT * FROM usuarios WHERE (email=?)`, [email]
        )
        return query[0]
    },

    // Insere o token da sessão do usuario
    pushToken: async (token, user_id) => {
        const query = await db.run(`
            UPDATE usuarios SET token=? WHERE (id=?)`, [token, user_id]
        )
        return query[0]
    },

    // Busca um usuario pelo token pra verificar se a sessão é valida
    findByToken: async (token) => {
        const query = await db.all(`
            SELECT * FROM usuarios WHERE (token=?)`, [token]
        )
        return query[0]
    },

    // Cancela a sessão e desloga o usuario
    deleteToken: async (user_id) => {
        const query = await db.run(`
            UPDATE usuarios SET token=? WHERE (id=?)`, [null, user_id]
        )
        return query[0]
    }

}

module.exports = Service