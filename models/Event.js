const Sequelize = require('sequelize');
const db = require('../config/db');

const Event = db.define('event', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true // Automatically gets converted to SERIAL
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    logo: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.DATE
    }
});

module.exports = Event;
