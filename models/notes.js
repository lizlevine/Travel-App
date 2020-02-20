// was orm
var orm = require('../db');

// * NOW * sequelize (adapted from todo's class app) 
const sequelize = require('../config');
const { DataTypes } = require('sequelize');

const Notes = sequelize.define('', {
//    do we need to capture user id throughout all tables?
    property-here: DataTypes.STRING,
  
});

// table or db name?.sync();

module.exports = Notes;