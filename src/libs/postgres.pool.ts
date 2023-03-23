import { Pool } from "pg";

import { config } from "./../config/config";

const USER = encodeURIComponent(config.dbUser as string);
const PASSWORD = encodeURIComponent(config.dbPassword as string);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({
  connectionString: URI,
});

module.exports = pool;
