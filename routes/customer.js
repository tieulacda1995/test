const express = require("express");

const customer = require("../controllers/CustomersController");

const router = express.Router();


router.get("/", customer.get)


module.exports = router;