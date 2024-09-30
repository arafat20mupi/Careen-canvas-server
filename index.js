const express = require("express");
const app = express();
const cors = require('cors');
const UserRoute=require('./User/UserRoute')
const educationRoute=require('./Education/EducationRoute')
const AwardRoute=require('./Awards/AwardsRoute')
const CareerObjectiveRoute=require('./CareerObjective/CareerObjectiveRoute')
const ContactRoute=require('./Contact/ContactRoute')
const NameRoute=require('./Name/NameRoute')
const ProjectsRoute=require('./Project/ProjectsRoute')
const SkillRoute=require('./Skills/skillsRoute')
const SummaryRoute=require('./Summary/SummaryRoute')
const TitleRoute=require('./Title/TitleRoute')
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
// education
app.use("/api/education",educationRoute )
// Awards 
app.use("/api/awards", AwardRoute )
// Career Objective
app.use("/api/careersObjective",CareerObjectiveRoute);
// Contacts
app.use("/api/contact", ContactRoute );
// Name
app.use("/api/name", NameRoute);
// Projects 
app.use("/api/projects", ProjectsRoute);
// skills
app.use("/api/skills", SkillRoute);
// Summary
app.use("/api/summary", SummaryRoute);
// title
app.use("/api/title", TitleRoute);


// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});