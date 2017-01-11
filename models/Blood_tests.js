module.exports = function(sequelize, DataTypes) {
    // define entity
    var Blood_tests = sequelize.define('Blood_tests', {
  test_name: {
    type: DataTypes.STRING,
    field: 'test_name',
    allowNull: { args: false, msg: 'Name is required.' }
  },
  test_value: {
    type: DataTypes.STRING,
    field: 'test_value',
    validate: {
        notEmpty: { msg: "Value is required" },
    }
  },
  test_result: {
    type: DataTypes.STRING,
    field: 'test_result',
     
  },
 /* id_doctor: {
    type: DataTypes.STRING,
    field: 'id_doctor'
  }*/
}, {
   timestamps: false,
  tableName: 'blood_tests',
  classMethods: {
      associate: function(models) {
        Blood_tests.belongsTo(models.Doctors, {  
          onDelete: "CASCADE",
        });
      }
    }
 
});

return Blood_tests;
  
}