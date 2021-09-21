const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Milestone extends Model {}

Milestone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: false,
    modelName: 'milestones',
  },
);

module.exports = Milestone;
