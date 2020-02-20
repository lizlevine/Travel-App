// was orm
var orm = require('../db');


// * NOW * sequelize (taken from todo's class app) data for user sign-in
const sequelize = require('../config');
const { DataTypes } = require('sequelize');

const Activities = sequelize.define('', {
    //    do we need to capture user id throughout all tables?
  event_name: DataTypes.STRING,
  
});

// table or db name?.sync();

module.exports = Activities;