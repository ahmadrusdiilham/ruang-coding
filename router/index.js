const ControllerUser = require("../controllers/controllerUser");
const { isLoggedin } = require("../middlewares/auth");

const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("Home /");
// });

router.get("/register", ControllerUser.register);

router.post("/register", ControllerUser.postRegister);

router.get("/login", ControllerUser.login);
router.post("/login", ControllerUser.postLogin);
router.get("/logout", ControllerUser.logout);

router.get("/", ControllerUser.home);
router.use(require("./student"));
router.use(require("./course"));
router.use(isLoggedin);

module.exports = router;
