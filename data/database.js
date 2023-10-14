const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    database: 'mypost',
    user: 'root',
    password: 'Sxcosmos_007'
})

module.exports = pool