require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const mustache = require('mustache-express')
const routes = require('./src/routes/routes')

// Inicia o servidor
const server = express()

// Configuraçoes de CORS e JSON
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Configura que vai renderizar as telas do sistema
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, './src/views'))
server.engine('mustache', mustache())

server.use(routes)

// Caso houver erro retorna o 404
server.use((req, res) => {
    res.status(404).send('Página não encontrada')
})

// PORTA a onde o servidor esta rodando
server.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.BASE}`)
})