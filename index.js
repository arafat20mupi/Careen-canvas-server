const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
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
const JobRoute=require('./JobSection/JobRoute')
const PaymentsRoute=require('./Payment/PaymentRoute')
const connectDB=require("./Config/dbConfig")

require("dotenv").config();
// Body parser middleware to parse JSON request bodies
app.use(bodyParser.json()); 
app.use(express.urlencoded({ extended: true }));
connectDB()
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174' ]
}));
app.use(express.json());


//  Home route
app.get("/", (req, res) => {
  res.send("hello Developer");
});
 
// Name
app.use("/api/name", NameContactRoute);
// education
app.use("/api/education",educationRoute )
// language
app.use("/api/language",LanguageRoute )
// experience
app.use("/api/Experience",ExperienceRoute )
// Certificate
app.use('/api', certificatesRoutes); 
// Career Objective
app.use("/api",CareerObjectiveRoute);
// skills
app.use("/api", SkillRoute);
// Projects 
app.use("/api", ProjectsRoute);
// Awards 
app.use("/api", AwardRoute )
//  Blogs
 app.use("/api",JobRoute)



// user route
app.use("/api/users",UserRoute )



// Summary
app.use("/api", SummaryRoute);
// title
app.use("/api", TitleRoute);

  //  payment  related api
 app.use('/api', PaymentsRoute)

  
// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});