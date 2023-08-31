"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StudentProfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentProfil.belongsTo(models.User);
      // define association here
    }
    get formaterDate() {
      return this.dateOfBirth.toISOString().split("T")[0];
    }
  }
  StudentProfil.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name is required!",
          },
          notNull: {
            args: true,
            msg: "Name is required!",
          },
        },
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Date of Birth is required!",
          },
          notNull: {
            args: true,
            msg: "Date of Birth is required!",
          },
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "City is required!",
          },
          notNull: {
            args: true,
            msg: "City is required!",
          },
        },
      },
      school: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "school is required!",
          },
          notNull: {
            args: true,
            msg: "school is required!",
          },
        },
      },
      photoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "PhotoUrl is required!",
          },
          notNull: {
            args: true,
            msg: "PhotoUrl is required!",
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "StudentProfil",
    }
  );
  return StudentProfil;
};
