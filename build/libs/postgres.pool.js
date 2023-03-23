"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./../config/config");
const USER = encodeURIComponent(config_1.config.dbUser);
const PASSWORD = encodeURIComponent(config_1.config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config_1.config.dbHost}:${config_1.config.dbPort}/${config_1.config.dbName}`;
const pool = new pg_1.Pool({
    connectionString: URI,
});
module.exports = pool;
