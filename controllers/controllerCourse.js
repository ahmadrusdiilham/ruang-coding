const { Course, Category, User, StudentCourse } = require("../models/index");
const { Op } = require("sequelize");

class ControllerCourse {
  static listCourse(req, res) {
    console.log(req.query);
    const { name, error } = req.query;
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
        res.render("courseList", { dataCourse, error });
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

  static remove(req, res) {
    const { id } = req.params;
    Course.destroy({
      where: { id },
    })
      .then(() => {
        res.redirect("/course");
      })
      .catch((err) => {
        console.log(err);
        res.sendr(err);
      });

    // res.send("hello");
  }
  static status(req, res) {
    console.log(req.params);
    const { id } = req.params;
    Course.findOne({
      include: [User],
      where: { id },
    })
      .then((status) => {
        res.render("status", { status });
      })
      .catch((err) => {
        console.log(err);
        res.sendr(err);
      });
  }
  static buy(req, res) {
    const { userId } = req.session;
    const { id } = req.params;
    StudentCourse.create({ UserId: userId, CourseId: id })
      .then(() => {
        res.redirect("/home");
      })
      .catch((err) => {
        console.log(err);
        res.sendr(err);
      });
  }
  static report(req, res) {
    findAll;
  }
}

module.exports = ControllerCourse;
