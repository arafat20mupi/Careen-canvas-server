const BlogSchema = require("./BlogSchema");

//  add a blog

exports.createBlog = async (req, res) => {
  try {
    const blog = new BlogSchema(req.body);
    await blog.save();
    console.log(blog);
    res.status(201).json({
      success: true,
      message: "Job listing created successfully!",
      blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create job listing",
      error: error.message,
    });
  }
};

//    get all blogs
exports.getPaginatedBlogs = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const blogs = await BlogSchema.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await BlogSchema.countDocuments();

    res.status(200).json({
      success: true,
      blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve job listings",
      error: error.message,
    });
  }
};

//  get all the blog  by id
exports.getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogSchema.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Job listing not found",
      });
    }
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve job listing",
      error: error.message,
    });
  }
};
//  update a blog
exports.updateBlog = async (req, res) => {
  try {
    const blog = await BlogSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Job listing not found",
      });
    }
    res.status(200).json({
      message: "Job listing updated successfully!",
      blog,
    });
    console.log(blog);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update job listing",
      error: error.message,
    });
  }
};
//  delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await BlogSchema.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Job listing not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Job listing deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete job listing",
      error: error.message,
    });
  }
};
