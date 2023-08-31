const bcrypt = require("bcryptjs");

function passwordCode(value) {
  let salt = bcrypt.genSaltSync(10); //helper
  return bcrypt.hashSync(value, salt);
}

module.exports = passwordCode;
