const isLoggedin = function (req, res, next) {
  if (!req.session.userId) {
    const error = "Please Login First";
    res.redirect(`/login?error=${error}`);
  } else {
    next();
  }
};

const isInstructor = function (req, res, next) {
  if (req.session.userId && req.session.role !== "instructor") {
    const error = "You Have no Access";
    res.redirect(`/login?error=${error}`);
  } else {
    next();
  }
};

module.exports = { isLoggedin, isInstructor };
