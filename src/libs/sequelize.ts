const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setModels = require("../db/models");

const USER = encodeURIComponent(config.dbUser as string);
const PASSWORD = encodeURIComponent(config.dbPassword as string);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  logging: false,
  dialect: "postgres",
});

setModels(sequelize);

sequelize.sync();

module.exports = sequelize;
