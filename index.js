const express = require("express");
const app = express();
const cors = require('cors');
const UserRoute=require('./User/UserRoute')
const connectDB=require("./Config/dbConfig")
 
require("dotenv").config();
connectDB()
// Middleware
app.use(cors());
app.use(express.json());
//  Home route
app.get("/", (req, res) => {
  res.send("hello Developer");
});

// user route
app.use("/api/users",UserRoute )

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});