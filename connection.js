const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dawgman96!!',
    database: ''
},
console.log('Connected to database')
);

module.exports = db