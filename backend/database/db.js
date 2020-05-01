const Sequelize = require("sequelize")
const db = {}

//const sequelize = new Sequelize('database name', 'username', 'password', {
const sequelize = new Sequelize('getfit', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db