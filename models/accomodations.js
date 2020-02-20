// was orm
var orm = require('../db');

// * NOW * sequelize 
const sequelize = require('../config');
const { DataTypes } = require('sequelize');

const Accomodations = sequelize.define('', {
    //    do we need to capture user id throughout all tables?
  property-here: DataTypes.STRING,
  property-here: DataTypes.STRING
});

// table or db name?.sync();

module.exports = Accomodations;