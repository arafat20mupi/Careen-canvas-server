const PDF = require("./PDFSchema");


// Upload PDF and associate with user
const postPdf = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No PDF file uploaded' });
    }
    console.log(req.user);
    const newPdf = new PDF({
      userEmail: req.user.email,
      userId: req.user.uid,  // Data is coming from Middleware
      pdf: req.file.path // Assuming multer handles the file upload and stores the path
    });

    await newPdf.save();
    res.status(201).json({ message: 'PDF uploaded successfully', data: newPdf });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading PDF', error: error.message });
  }
};

const getPdf = async (req, res) => {
  try {
    const pdf = await PDF.find();
    res.status(200).json({ message: 'PDFs retrieved successfully', data: pdf });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving PDFs', error: error.message });
  }
}

// Get PDF by ID
const getPdfById = async (req, res) => {
  try {
    const pdf = await PDF.findById(req.params.id);

    if (!pdf) {
      return res.status(404).json({ message: 'PDF not found' });
    }

    res.status(200).json({ message: 'PDF retrieved successfully', data: pdf });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving PDF', error: error.message });
  }
};

// Admin gives feedback on a PDF
const giveFeedback = async (req, res) => {
  try {
    const pdfId = req.params.id;  // Get the PDF ID from the URL parameters
    const { text, rating } = req.body;  // Get feedback text and rating from request body

    // Validate rating
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }
    console.log(req.body);
    // Find the PDF by ID and update feedback
    const updatedPdf = await PDF.findByIdAndUpdate(
      pdfId,
      {
        feedback: {
          text: text,
          rating: rating,
        }
        ,
        status: 'approved'
      },
      { new: true }  // Return the updated document
    );

    if (!updatedPdf) {
      return res.status(404).json({ message: 'PDF not found' });
    }

    res.status(200).json({ message: 'Feedback added successfully', data: updatedPdf });
  } catch (error) {
    res.status(500).json({ message: 'Error adding feedback', error: error.message });
  }
};




// Get all PDFs by user email
const getPdfByEmail = async (req, res) => {
  const email = req.params.email; // Get email from URL parameter
  try {
    // Find all PDFs associated with the provided email
    const pdfs = await PDF.find({ userEmail: email });

    if (pdfs.length === 0) {
      return res.status(404).json({ message: 'No PDFs found for this email' });
    }

    // Send the first PDF file found for the user (adjust to loop through if multiple PDFs should be sent)
    const pdfFilePath = path.join(__dirname, '..', pdfs[0].pdf); // Sending the first one for simplicity
    res.sendFile(pdfFilePath); // This sends the first PDF file

  } catch (error) {
    res.status(500).json({ message: 'Error retrieving PDFs', error: error.message });
  }
};

const getFeedback = async (req, res) => {
  try {
    const pdfEmail = req.params.email; 

    // Find all feedback entries for the provided email
    const feedbacks = await PDF.find({ userEmail: pdfEmail });

    if (feedbacks.length === 0) {
      return res.status(404).json({ message: 'No feedback found for this email' });
    }

    res.status(200).json({ message: 'Feedback retrieved successfully', data: feedbacks });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving feedback', error: error.message });
  }
};

module.exports = {
  postPdf,
  getPdf,
  getPdfById,
  giveFeedback,
  getFeedback,
  getPdfByEmail
};
