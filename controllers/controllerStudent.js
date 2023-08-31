const { StudentProfil, User } = require("../models/index");

class ControllerStudent {
  static listStudent(req, res) {
    StudentProfil.findAll()
      .then((dataStudent) => {
        // res.send(dataStudent);
        res.render("listStudent", { dataStudent });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  static studentDetail(req, res) {
    const { id } = req.params;
    StudentProfil.findOne({
      where: { id },
    })
      .then((detailStudent) => {
        res.render("detailStudent", { detailStudent });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  static edit(req, res) {
    // console.log(req.params);
    const { id } = req.params;
    StudentProfil.findOne({
      where: { id },
    })
      .then((detailStudent) => {
        res.render("formEdit", { detailStudent });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  static processEdit(req, res) {
    const { id } = req.params;
    const { name, dateOfBirth, city, school, photoUrl } = req.body;
    StudentProfil.update(
      { name, dateOfBirth, city, school, photoUrl },
      { where: { id } }
    )
      .then(() => {
        res.redirect("/student");
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  // static buy(req, res) {
  //   console.log(req.session);
  // }
}

module.exports = ControllerStudent;
