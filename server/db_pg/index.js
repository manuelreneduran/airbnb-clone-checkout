const promise = require('bluebird');
const initOpts = { promiseLib: promise };
const pgp = require('./node_modules/pg-promise')(initOpts);
const connection = {
  host: process.env.PGHOST || 'localhost',
  port: process.env.PGPORT || '5432',
  database: 'airbnb',
  user: process.env.PGUSER || 'postgres',
  password: process.env.PGPASSWORD
};

const db = pgp(connection);

module.exports = db;