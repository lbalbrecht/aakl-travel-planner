const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class trips extends Model { }

trips.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            PrimaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            reference:{
                model: 'travelers',
                key: 'id',
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            reference:{
                model: 'locations',
                key:'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
    }
);
module.exports = trips;

