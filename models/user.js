"use strict";
const { Model } = require("sequelize");
const passwordCode = require("../helper/formatPassword");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.StudentProfil);
      User.belongsToMany(models.Course, {
        through: models.StudentCourse,
      });
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: "Email is required!",
          },
          notNull: {
            args: true,
            msg: "Email is required!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Password is required!",
          },
          notNull: {
            args: true,
            msg: "Password is required!",
          },
          len: {
            args: [8, 20],
            msg: "Minimum password length is 8",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Role is required!",
          },
          notNull: {
            args: true,
            msg: "Role is required!",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (instance, options) => {
          instance.password = passwordCode(instance.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
