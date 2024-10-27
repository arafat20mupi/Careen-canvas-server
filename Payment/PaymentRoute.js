const express = require("express");
const { payments, createPaymentIntent , getPayment , getPaymentByUserId} = require("./PaymentControllers");

const route = express.Router();

route.post("/createPaymentIntent", createPaymentIntent);
// Define the POST route for creating a payment
route.post("/payments", payments);
route.get("/PrimiumAllUser", getPayment);
route.get("/PrimiumUser/:id", getPaymentByUserId);

module.exports = route;
