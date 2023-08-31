"use strict";
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync("./data/courses.json", "utf-8"));
    data.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    return queryInterface.bulkInsert("Courses", data);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Courses", null, {});
  },
};
