const express = require("express");
const { payments, createPaymentIntent , getPayment , getPaymentByUserId} = require("./PaymentControllers");
const { authMiddleware } = require("../Middleware/Middleware");
const debounceMiddleware = require("../Middleware/debounceMiddleware");

const route = express.Router();

route.post("/createPaymentIntent", createPaymentIntent);
// Define the POST route for creating a payment
route.post("/payments",authMiddleware,debounceMiddleware, payments);
route.get("/PremiumAllUser", getPayment);
route.get("/PremiumUser", getPaymentByUserId);

module.exports = route;
