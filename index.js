const express = require("express");
const app = express();
const cors = require('cors');
const UserRoute=require('./User/UserRoute')
const educationRoute=require('./Education/EducationRoute')
const LanguageRoute=require("./Languages/LanguageRoute")
 const ExperienceRoute=require("./Experience/ExperienceRoute")
const AwardRoute=require('./Awards/AwardsRoute')
const CareerObjectiveRoute=require('./CareerObjective/CareerObjectiveRoute')
const NameContactRoute=require('./NameAndContact/NameContactRoute')
const ProjectsRoute=require('./Project/ProjectsRoute')
const SkillRoute=require('./Skills/skillsRoute')
const SummaryRoute=require('./Summary/SummaryRoute')
const TitleRoute=require('./Title/TitleRoute')
const certificatesRoutes = require("./Certificates/CertificateRoute")
const connectDB=require("./Config/dbConfig")
 
require("dotenv").config();
connectDB()
// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174' ]
}));
app.use(express.json());
//  Home route
app.get("/", (req, res) => {
  res.send("hello Developer");
});

// user route
app.use("/api/users",UserRoute )
// education
app.use("/api/education",educationRoute )
// language
app.use("/api/language",LanguageRoute )
// experience
app.use("/api/Experience",ExperienceRoute )

// Awards 
app.use("/api", AwardRoute )
// Career Objective
app.use("/api",CareerObjectiveRoute);

// Name
app.use("/api", NameContactRoute);
// Projects 
app.use("/api", ProjectsRoute);
// skills
app.use("/api", SkillRoute);
// Summary
app.use("/api", SummaryRoute);
// title
app.use("/api", TitleRoute);
// Certificate
app.use('/api', certificatesRoutes); 


// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});