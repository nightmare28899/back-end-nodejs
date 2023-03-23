import { Client } from "pg";

async function connect() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "kevin",
    password: "admin28899",
    database: "my_store",
  });
  await client.connect();
  return client;
}

module.exports = connect;
