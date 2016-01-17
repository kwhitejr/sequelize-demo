// Require in sequelize connector
var db = require('./models');

// Sync models with the database
db.sequelize.sync();
