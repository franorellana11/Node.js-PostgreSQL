// conexion a terceros y DDBB

const { Pool } = require('pg')

const { config } =  require('./../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const URI = `postgress://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`



  const pool = new Pool({connectionString: URI})

module.exports = pool
