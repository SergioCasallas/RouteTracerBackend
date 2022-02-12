const express = require("express");
const router = express.Router();

const { getDataCollection } = require("../controllers/CollectionController");

router.post("/", getDataCollection);

module.exports = router;
