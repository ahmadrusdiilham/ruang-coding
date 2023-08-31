"use strict";
const { Model } = require("sequelize");
const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.Category);
      Course.belongsToMany(models.User, {
        through: models.StudentCourse,
      });
      // define association here
    }
    get formatPrice() {
      return `Rp. ${this.price}`;
    }
    static search(options, name) {
      return (options.where.name = { [Op.iLike]: `%${name}%` });
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      duration: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
