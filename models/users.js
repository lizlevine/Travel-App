// was orm
var orm = require('../db');


// * NOW *  sequelize (taken from todo's class app) data for user sign-in
const sequelize = require('../config');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    //    do we need to capture user id throughout all tables?
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

// table or db name?.sync();

module.exports = User;