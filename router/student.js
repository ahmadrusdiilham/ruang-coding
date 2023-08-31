const ControllerStudent = require("../controllers/controllerStudent");
const router = require("express").Router();

router.get("/student", ControllerStudent.listStudent);
// router.get("/student/buy", ControllerStudent.buy);

router.get("/student/:id", ControllerStudent.studentDetail);
router.get("/student/:id/edit", ControllerStudent.edit);
router.post("/student/:id/edit", ControllerStudent.processEdit);

module.exports = router;
