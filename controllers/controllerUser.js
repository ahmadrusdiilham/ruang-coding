const { User, StudentProfil } = require("../models/index");

var bcrypt = require("bcryptjs");
class ControllerUser {
  static home(req, res) {
    const { error } = req.query;
    res.render("home", { error });
  }

  static register(req, res) {
    const { error } = req.query;
    // console.log(req.query);
    res.render("author/register");
  }

  static postRegister(req, res) {
    const { email, password, role, name, dateOfBirth, city, school, photoUrl } =
      req.body;
    User.create({ email, password, role })
      .then((dataReg) => {
        return StudentProfil.create({
          name,
          dateOfBirth,
          city,
          school,
          photoUrl,
          UserId: dataReg.id,
        });
      })
      .then(() => {
        res.redirect("/author/login");
      })
      .catch((err) => {
        if (err.name == "SequelizeValidationError") {
          const errors = err.errors.map((el) => {
            return el.message;
          });
          res.redirect(`/register?error=${errors}`);
          // console.log(errors);
        } else {
          console.log(err);
          res.send(err);
        }
      });
  }

  static login(req, res) {
    const { error } = req.query;
    res.render("author/login", { error });
  }
  static postLogin(req, res) {
    const { email, password } = req.body;
    User.findOne({ where: { email } })
      .then((user) => {
        if (user) {
          const isValidPassword = bcrypt.compareSync(password, user.password);
          if (isValidPassword) {
            req.session.userId = user.id;
            req.session.role = user.role;
            return res.redirect("/home");
          } else {
            const error = `invalid username/password`;
            return res.redirect(`author/login?error=${error}`);
          }
        } else {
          const error = "invalid username/password";
          return res.redirect(`author/login?error=${error}`);
        }
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  static logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("author/login");
      }
    });
  }
}

module.exports = ControllerUser;
