const router = require("express").Router();
const feedback = require("./feedback.controller");

router.route("/").get(feedback.getAll);

module.exports = router;
