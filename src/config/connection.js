const sqlite3 = require('sqlite3').verbose()
const { open } = require('sqlite') 

async function openDb() {
  return await open({
    filename: './database.db', 
    driver: sqlite3.Database
  })
}

module.exports = openDb