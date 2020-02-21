// import connection from connection.js file
<<<<<<< HEAD
=======
// query strings here
>>>>>>> 5178b97ce0487eeadc9119178f475d6fe4f7fc24
var connection = require("./connection.js");

// below is taken from config/index.js file from todo app


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.JAWSDB_URL || 'mysql://root:1234@localhost:3306/todos_db'
);

module.exports = sequelize;