// db.js
const mysql = require('mysql2/promise');
const dbConfig = require('./dbConfig');

async function executeQuery(query) {
    const connection = await mysql.createConnection(dbConfig);
    const [result, fields] = await connection.execute(query);
    await connection.end();
    return result;
}

module.exports = {
    executeQuery,
};
