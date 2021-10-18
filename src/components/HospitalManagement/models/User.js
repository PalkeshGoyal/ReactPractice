const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    UserId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    UserDesig: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UserType: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'User',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserId" },
        ]
      },
    ]
  });
};
