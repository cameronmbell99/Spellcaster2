  module.exports = function(sequelize, DataTypes) {
    var Spell = sequelize.define("Spell", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      spell_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      isCast: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      
    }, {
      timestamps: false
    }
    );
    return Spell;
  };
  