require('dotenv').config()

const express = require('express')
const cors = require('cors')

// Inicia o servidor
const server = express()

// Configuraçoes de CORS e JSON
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// Caso houver erro retorna o 404
server.use((req, res) => {
    res.status(404)
    res.json({ message: 'url não encontrada' })
})

// PORTA a onde o servidor esta rodando
server.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.BASE}`)
})