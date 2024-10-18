const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const UserRoute = require('./User/UserRoute')
const JobRoute = require('./JobSection/JobRoute')
const PaymentsRoute = require('./Payment/PaymentRoute')
const connectDB = require("./Config/dbConfig")
const FromData = require("./FromData/formDataRoutes")
 const PDFRoute= require('./PDF/PdfRoute')
require("dotenv").config();
// Body parser middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
connectDB()
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174']
}));
app.use(express.json());


//  Home route
app.get("/", (req, res) => {
  res.send("hello Developer");
});


//  Blogs
app.use("/api", JobRoute)



// user route
app.use("/api/users", UserRoute)

// FromData
app.use('/api' ,  FromData )

//  payment  related api
app.use('/api', PaymentsRoute)
//   Pdf
 app.use('/api',PDFRoute)

// Server listening
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});