"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentCourse.belongsTo(models.User);
      StudentCourse.belongsTo(models.Course);
      // define association here
    }
    statusStudent() {
      return "on progres";
    }
    get formaterDate() {
      return this.createdAt.toISOString().split("T")[0];
    }
  }
  StudentCourse.init(
    {
      status: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      CourseId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (instance, options) => {
          instance.status = instance.statusStudent();
        },
      },
      sequelize,
      modelName: "StudentCourse",
    }
  );
  return StudentCourse;
};
