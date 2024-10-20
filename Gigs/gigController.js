const  Gig  = require('./gig')
const  User  = require('../User/UserSchema')
// Create a new gig
const createGig = async (req, res) => {
    try {
      const { title, userImage, projectImages, userName, userId, projectDetail, tags } = req.body;
  
      // Create a new gig instance
      const newGig = new Gig({
        title,
        userImage,
        projectImages, // Assuming projectImages is an array of buffers
        userName,
        userId,
        projectDetail,
        tags,
      });
  
      // Save the gig to the database
      const savedGig = await newGig.save();
  
      // Respond with the created gig
      res.status(201).json(savedGig);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
// Update a gig by project ID, allowing for partial updates
const updateByProjectId =async (req, res) => {
    try {
      const { projectId } = req.params;
      const updates = req.body;
  
      // Check if files were uploaded and convert them to buffers
      if (req.files && req.files.length > 0) {
        updates.projectImages = req.files.map(file => file.buffer); // Update with new project images
      }
  
      // Update the gig using findByIdAndUpdate
      const updatedGig = await Gig.findByIdAndUpdate(
        projectId,
        { $set: updates }, // Use $set to update only the provided fields
        { new: true, runValidators: true } // Return the updated document and run validation
      );
  
      // If gig not found, return a 404 error
      if (!updatedGig) {
        return res.status(404).json({ message: 'Gig not found' });
      }
  
      // Respond with the updated gig
      res.status(200).json(updatedGig);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
// Delete a gig by project ID
const deleteById =  async (req, res) => {
    try {
      const { projectId } = req.params; // Extract projectId from the URL
  
      // Find and delete the gig by project ID
      const deletedGig = await Gig.findByIdAndDelete(projectId);
  
      // If gig not found, return a 404 error
      if (!deletedGig) {
        return res.status(404).json({ message: 'Gig not found' });
      }
  
      // Respond with a success message
      res.status(200).json({ message: 'Gig deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
//Get a gig by project ID
const getGigByProjectID = async (req, res) => {
    try {
        const { projectId } = req.params; // Extract projectId from the URL

        // Find the gig by project ID
        const gig = await Gig.findById(projectId);

        // If gig not found, return a 404 error
        if (!gig) {
            return res.status(404).json({ message: 'Gig not found' });
        }

        // Respond with the found gig
        res.status(200).json(gig);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// Get all gigs with filter, searching, and pagination
const getAllGigsByFilter = async (req, res) => {
    try {
        const { page = 1, limit = 10, title, tags, startDate, endDate } = req.query;

        // Construct the search filters
        let filter = {};

        // Filter by title (searching)
        if (title) {
            filter.title = { $regex: title, $options: 'i' }; // Case-insensitive search
        }

        // Filter by tags
        if (tags) {
            filter.tags = { $in: tags.split(',') }; // Split tags into an array if multiple
        }

        // Filter by date range
        if (startDate || endDate) {
            filter.date = {};
            if (startDate) filter.date.$gte = new Date(startDate);
            if (endDate) filter.date.$lte = new Date(endDate);
        }

        // Ensure page and limit are numbers
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);

        // Fetch filtered gigs with pagination
        const gigs = await Gig.find(filter)
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber)
            .exec();

        // Count total documents for pagination
        const totalGigs = await Gig.countDocuments(filter);

        // Send response
        res.status(200).json({
            gigs,
            currentPage: pageNumber,
            totalPages: Math.ceil(totalGigs / limitNumber),
            totalGigs,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




// Approve a gig by project ID  (Admin work)
const approveGig = async (req, res) => {
    try {
      const { projectId } = req.params;
      
      // Assuming you pass the user information with the request (e.g., from a JWT token)
      const userId = req.userId; // Get the user ID from the request (ensure you set this earlier in your auth process)
  
      // Find the user to check their role
      const user = await User.findById(userId);
  
      // Check if the user is an admin
      if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
      }
  
      // Find the gig and update its approval status
      const updatedGig = await Gig.findByIdAndUpdate(
        projectId,
        { isApproved: true }, // Set isApproved to true
        { new: true, runValidators: true } // Return the updated document and run validation
      );
  
      // If gig not found, return a 404 error
      if (!updatedGig) {
        return res.status(404).json({ message: 'Gig not found' });
      }
  
      // Respond with the updated gig
      res.status(200).json(updatedGig);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports ={
    createGig,
    updateByProjectId,
    deleteById,
    getGigByProjectID,
    getAllGigsByFilter,
    approveGig
}