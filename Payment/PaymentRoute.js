const express = require("express");
const { payments, createPaymentIntent } = require("./PaymentControllers");

const route = express.Router();

route.post("/createPaymentIntent", createPaymentIntent);
// Define the POST route for creating a payment
route.post("/payments", payments);

module.exports = route;
