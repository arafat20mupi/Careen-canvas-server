const express = require("express");
const app = express();
const cors = require('cors');
const UserRoute=require('./User/UserRoute')
const educationRoute=require('./Education/EducationRoute')
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
<<<<<<< HEAD

=======
// education
app.use("/api/education",educationRoute )
>>>>>>> daf4fdcff2487591e3cf62a857819aba468594c5
// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});