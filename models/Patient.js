module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define('Patient', {
  
    FirstName: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [0, 20],
        
        
      },
      
    },
  
    LastName: {
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        len: [0, 20],
        
        
      },
      
    },
  
    DateOfBirth: {
      type: DataTypes.DATE,
      validate: {
        notNull: true,
        
        
        
      },
      get: function() {
        var value = this.getDataValue('DateOfBirth')
        return value ? value.toISOString().substring(0, 10) : value
      }
    },
  
  })

  return Patient
}
