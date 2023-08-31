const { Course, Category, User, StudentCourse } = require("../models/index");
const { Op } = require("sequelize");

class ControllerCourse {
  static listCourse(req, res) {
    // console.log(req.query);
    const { name } = req.query;
    const options = {
      include: Category,
      order: [["price", "DESC"]],
      where: {},
    };
    if (name) {
      Course.search(options, name);
    }
    Course.findAll(options)
      .then((dataCourse) => {
        res.render("courseList", { dataCourse });
      })
      .catch((err) => {
        console.log(err);
        res.sendr(err);
      });
  }
  static detail(req, res) {
    const { id } = req.params;
    Course.findOne({
      where: {
        id,
      },
      include: Category,
    })
      .then((detail) => {
        res.render("detailCourse", { detail });
      })
      .catch((err) => {
        console.log(err);
        res.sendr(err);
      });
  }
}
module.exports = ControllerCourse;
