const Gig = require("./gig");
const UserSchema = require("../User/UserSchema");
// post
const createGig = async (req, res) => {
  try {
    const {
      title,
      userImage,
      projectImages,
      userName,
      userId,
      projectDetail,
      skills,
      contactInfo,
      faq,
    } = req.body;

    // Create a new gig object
    const newGig = new Gig({
      title,
      userImage,
      projectImages,
      userName,
      userId,
      projectDetail,
      skills,
      contactInfo,
      faq,
    });

    // Save the gig to the database
    const savedGig = await newGig.save();
    console.log(savedGig);
    // Respond with the created gig data
    res.status(201).json(savedGig);
  } catch (error) {
    console.error("Error creating gig:", error);
    res.status(500).json({ error: "Error creating gig" });
  }
};

// Update a gig by project ID, allowing for partial updates
const updateByProjectId = async (req, res) => {
  try {
    const { projectId } = req.params;
    const updates = req.body;

    // Check if files were uploaded and convert them to buffers
    if (req.files && req.files.length > 0) {
      updates.projectImages = req.files.map((file) => file.buffer); // Update with new project images
    }

    // Check for skills and contact information in the updates
    if (updates.skills) {
      updates.skills = updates.skills.split(",").map((skill) => skill.trim()); // Convert comma-separated string to an array
    }

    // Update the gig using findByIdAndUpdate
    const updatedGig = await Gig.findByIdAndUpdate(
      projectId,
      { $set: updates }, // Use $set to update only the provided fields
      { new: true, runValidators: true } // Return the updated document and run validation
    );

    // If gig not found, return a 404 error
    if (!updatedGig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    // Respond with the updated gig
    res.status(200).json(updatedGig);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a gig by project ID
const deleteById = async (req, res) => {
  try {
    const { projectId } = req.params; // Extract projectId from the URL

    // Find and delete the gig by project ID
    const deletedGig = await Gig.findByIdAndDelete(projectId);

    // If gig not found, return a 404 error
    if (!deletedGig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    // Respond with a success message
    res.status(200).json({ message: "Gig deleted successfully" });
  } catch (error) {
    // Handle potential errors during the deletion process
    res
      .status(500)
      .json({ error: "An error occurred while deleting the gig." });
  }
};

// Get a gig by project ID
const getGigByProjectID = async (req, res) => {
  try {
    // const { projectId } = req.params; // Extract projectId from the URL

    // Find the gig by project ID
    // const gig = await Gig.findById(projectId);

    const gig = await Gig.find();
    // console.log(gig);
    // If gig not found, return a 404 error
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    // Respond with the found gig
    res.status(200).json(gig);
  } catch (error) {
    // Handle potential errors during the retrieval process
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the gig." });
  }
};

// Get all gigs with filter, searching, skills, rating, and pagination
const getAllGigsByFilter = async (req, res) => {
  try {
    // Extract query parameters with default values
    const {
      page = 1,
      limit = 10,
      title,
      tags,
      skills,
      search,
      startDate,
      endDate,
      rating,
    } = req.query;

    // Construct the search filters
    let filter = {};

    // Filter by title (searching)
    if (title) {
      filter.title = { $regex: title, $options: "i" }; // Case-insensitive search
    }

    // Additional search filter
    if (search) {
      // This will search in both title and projectDetail
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { projectDetail: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by tags (supports multiple tags)
    if (tags) {
      filter.tags = { $in: tags.split(",").map((tag) => tag.trim()) }; // Split and trim tags into an array
    }

    // Filter by skills (supports multiple skills)
    if (skills) {
      filter.skills = { $in: skills.split(",").map((skill) => skill.trim()) }; // Split and trim skills into an array
    }

    // Filter by date range
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate); // Greater than or equal to startDate
      if (endDate) filter.date.$lte = new Date(endDate); // Less than or equal to endDate
    }

    // Filter by minimum rating
    if (rating) {
      const minRating = parseFloat(rating);
      if (!isNaN(minRating) && minRating >= 0 && minRating <= 5) {
        filter.rating = { $gte: minRating }; // Greater than or equal to minimum rating
      }
    }

    // Ensure page and limit are numbers
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    // Validate pagination numbers
    if (pageNumber < 1 || limitNumber < 1) {
      return res
        .status(400)
        .json({ message: "Page and limit must be greater than 0." });
    }

    // Fetch filtered gigs with pagination
    const gigs = await Gig.find(filter)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber)
      .exec();

    // Count total documents for pagination
    const totalGigs = await Gig.countDocuments(filter);

    // Send response with pagination information
    res.status(200).json({
      gigs,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalGigs / limitNumber),
      totalGigs,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching gigs." });
  }
};

// Approve a gig by project ID  (Admin work)
const approveGig = async (req, res) => {
  try {
    const { projectId } = req.params;

    // use jwt
    // Assuming you pass the user information with the request (e.g., from a JWT token)
    const userId = req.userId.uid; // Get the user ID from the request (ensure you set this earlier in your auth process)

    // Find the user to check their role
    const user = await UserSchema.findById(userId);

    // Check if the user is an admin
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // Find the gig and update its approval status
    const updatedGig = await Gig.findByIdAndUpdate(
      projectId,
      { isApproved: true }, // Set isApproved to true
      { new: true, runValidators: true } // Return the updated document and run validation
    );

    // If gig not found, return a 404 error
    if (!updatedGig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    // Respond with the updated gig
    res.status(200).json(updatedGig);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const addReviewToGig = async (req, res) => {
  try {
    const { gigId } = req.params; // Extract gigId from the URL
    const { userId, comment } = req.body; // Extract userId and comment from the request body

    // Find the gig by ID
    const gig = await Gig.findById(gigId);
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    // Create a new review object
    const newReview = {
      userId,
      comment,
      date: new Date(), // Automatically set the current date
    };

    // Add the review to the gig's reviews array
    gig.reviews.push(newReview);

    // Calculate the new average rating (optional)
    gig.rating =
      (gig.rating * gig.reviews.length + (newReview.rating || 0)) /
      (gig.reviews.length + 1);

    // Save the updated gig
    const updatedGig = await gig.save();

    // Respond with the updated gig
    res.status(200).json(updatedGig);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAllReviewsForGig = async (req, res) => {
  try {
    const { gigId } = req.params; // Extract gigId from the URL

    // Find the gig by ID
    const gig = await Gig.findById(gigId).select("reviews");
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    // Respond with the reviews of the gig
    res.status(200).json(gig.reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createGig,
  updateByProjectId,
  deleteById,
  getGigByProjectID,
  getAllGigsByFilter,
  approveGig,
  addReviewToGig,
  getAllReviewsForGig,
};
