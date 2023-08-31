const ControllerCourse = require("../controllers/controllerCourse");

const router = require("express").Router();
router.get("/course", ControllerCourse.listCourse);
// router.get("/course/report", ControllerCourse.report);
router.get("/course/:id/detail", ControllerCourse.detail);
router.post("/course/:id/delete", (req, res) => {
  res.send("course");
});
module.exports = router;
