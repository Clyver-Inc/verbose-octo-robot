const config = require("../config/index");

module.exports = {
  ...config.database,
  dialect: "mysql",
};
