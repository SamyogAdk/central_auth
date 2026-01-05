const {Pool} = require('pg');
require('dotenv').config();
const env = process.env;

const pool = new Pool({
    host: env.PGHOST,
    user: env.PGUSER,
    password: env.PGPASSWORD,
    database: env.PGDATABASE,
    port: env.PGPORT
});

module.exports = pool;