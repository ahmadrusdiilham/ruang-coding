"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn("Courses", "CategoryId", {
      type: "INTEGER",
      allowNull: false,
      references: {
        model: "Categories",
      },
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Courses", "CategoryId");
  },
};
