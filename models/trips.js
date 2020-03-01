module.exports = function(sequelize, DataTypes) {
  const Trip = sequelize.define("Trip", {
    name: DataTypes.STRING,
    notes: DataTypes.STRING(3500)
  });



  return Trip;
};
