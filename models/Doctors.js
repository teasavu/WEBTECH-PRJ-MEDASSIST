module.exports = function(sequelize, DataTypes) {
    // define entity
    var Doctors = sequelize.define('Doctors', {
  doctor_name: {
    type: DataTypes.STRING,
    field: 'doctor_name'
  }
}, {
   timestamps: false,
  tableName: 'doctors',
  classMethods: {
      associate: function(models) {
        Doctors.hasMany(models.Blood_tests)
      }
    }
});

return Doctors;
  
}