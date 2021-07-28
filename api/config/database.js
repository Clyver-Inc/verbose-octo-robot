const config = require("./index");

module.exports = {
  ...config.database,
  dialect: "mysql",
};
