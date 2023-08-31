const ControllerCourse = require("../controllers/controllerCourse");
const { isInstructor } = require("../middlewares/auth");

const router = require("express").Router();
router.get("/course", ControllerCourse.listCourse);
// router.get("/course/report", ControllerCourse.report);
router.get("/course/:id/detail", ControllerCourse.detail);
router.get("/course/:id/buy", ControllerCourse.buy);
router.get("/course/:id/delete", isInstructor, ControllerCourse.remove);
router.get("/course/:id/status", isInstructor, ControllerCourse.status);

module.exports = router;
