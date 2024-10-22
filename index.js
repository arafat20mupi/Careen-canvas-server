const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Routes
const UserRoute = require('./User/UserRoute')
const JobRoute = require('./JobSection/JobRoute')
const PaymentsRoute = require('./Payment/PaymentRoute')
const connectDB = require("./Config/dbConfig")
const FromData = require("./FromData/formDataRoutes")
const PDFRoute = require('./PDF/PdfRoute')
const gitRoute = require('./Gigs/gigRoute')
const ApplyJobRoute = require('./ApplyNow/ApplyRoute')

require("dotenv").config();
// Body parser middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
connectDB()
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174','https://calm-platypus-028451.netlify.app/']
//   // origin: '*',
// }));
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://calm-platypus-028451.netlify.app' , 'https://teal-taffy-a34964.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify the HTTP methods allowed
  credentials: true,  // Enable this if you're using cookies or authentication tokens
}));

app.use(express.json());


//  Home route
app.get("/", (req, res) => {
  res.send("hello Developer");
});


//  Jobs Route
app.use("/api", JobRoute)

// user route
app.use("/api/users", UserRoute)

// FromData
app.use('/api', FromData)

//  payment  related api
app.use('/api', PaymentsRoute)

//   Pdf
app.use('/api', PDFRoute)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Gigs
app.use('/api', gitRoute)

// Job Apply Route
app.use('/api', ApplyJobRoute)

// Server listening
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});