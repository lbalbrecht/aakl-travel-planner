const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class travelers extends Model {}

travelers.init(
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'travelers',
    }
);

module.exports = travelers;