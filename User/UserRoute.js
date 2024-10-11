// UserRoutes.js
const express = require("express");
const { register, login, getAllUsers, deleteUser, changeUserRole } = require("./UserController");
const authMiddleware = require("../Middelware/Middleware");

const route = express.Router();

// Register Route
route.post("/register", register);

// Login Route
route.post("/login", login);

// Get All Users Route
route.get("/", authMiddleware, getAllUsers);

// Delete User Route
route.delete("/:uid", authMiddleware, deleteUser);

// Change User Role Route
route.put("/role", authMiddleware, changeUserRole);

module.exports = route;
