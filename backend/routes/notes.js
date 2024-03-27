const controller = require("../controllers/notes");
const router = require("express").Router();

router.route("/").get(controller.getAllNotes).post(controller.addNote);
router.route("/:id").get(controller.getNote);

module.exports = router;
