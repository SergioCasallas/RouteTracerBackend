const express = require("express");
const router = express.Router();

const { getDataDelivery } = require("../controllers/DeliveryController");

router.post("/", getDataDelivery);

module.exports = router;
