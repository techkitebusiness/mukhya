const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'superwinning',
    password: 'superwinning1',
    database: 'superwinning',
});


export default connection;