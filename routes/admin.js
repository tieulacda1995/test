const express = require("express");

const admin = require("../controllers/AdminsController")

const router = express.Router();

router.get("/", admin.get);


module.exports = router;