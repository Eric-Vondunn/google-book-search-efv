const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// to match the google api
router.route("/").get(googleController.findAll);

module.exports = router;
