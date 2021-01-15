const constants = require("../utils/constants");
const environment = require("../utils/environment");

module.exports = {
  host: environment.database.host,
  port: environment.database.port,
  username: environment.database.username,
  password: environment.database.password,
  database: environment.database.database,
  dialect: environment.database.dialect,
  ...constants.database
};
