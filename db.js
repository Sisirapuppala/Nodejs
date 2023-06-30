const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Welcome@123456',
    database: 'employee_db'
})
    module.exports = mysqlPool