const locations = require('./locations');
const travelers = require('./travelers');
const trips = require('./trips');




travelers.belongsToMany(locations, {
    through: {
        model: trips, 
        unique:false,
    },
    as: "travelers_locations"
});

locations.belongsToMany(travelers,  {
    through: {
        model: trips, 
        unique:false,
    },
    as: "locations_travelers"
});

module.exports = { travelers, locations, trips };
