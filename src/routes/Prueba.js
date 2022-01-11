const express = require("express");

const router = express.Router();

const { getPrueba } = require("../controllers/PruebaController");

router.get("/", getPrueba);

module.exports = router;
