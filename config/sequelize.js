// import connection from connection.js file
// query strings here
var connection = require("./connection.js");

// below is taken from config/index.js file from todo app


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || 'mysql://root:1234@localhost:3306/todos_db'
);

module.exports = sequelize;