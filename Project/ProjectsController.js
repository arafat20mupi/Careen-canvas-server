const Projects = require("./projectSchema");

// Helper function for standardized error responses
const handleError = (res, message, error) => {
  return res.status(500).json({ message, error: error.message || error });
};

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, description, userId, templateId } = req.body;

    // Input validation could be done here

    const newProject = new Projects({
      projects: [{ title, description }],
      userId,
      templateId,
    });

    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    handleError(res, 'Error creating project', error);
  }
};


// Get all projects from the database
exports.getAllProjects = async (req, res) => {
  try {
    // Retrieve all projects
    const projects = await Projects.find().populate('userId', 'name email');

    if (!projects || projects.length === 0) {
      return res.status(404).json({ message: 'No projects found' });
    }

    // Return the list of projects
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};


// Get a specific project by userId and templateId
exports.getProjectById = async (req, res) => {
  try {
    const { id, templateId } = req.params;
    const project = await Projects.findOne({ _id: id, templateId });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(project);
  } catch (error) {
    handleError(res, 'Error fetching project', error);
  }
};

// Update a project by userId and templateId
exports.updateProject = async (req, res) => {
  try {
    const { id, templateId } = req.params; 
    const { title, description } = req.body; // Destructure only the fields you need

    // Find the project and update the fields inside the projects array
    const updatedProject = await Projects.findOneAndUpdate(
      { _id: id, templateId }, 
      {
        $set: {
          "projects.0.title": title, // Update title of the first project
          "projects.0.description": description // Update description of the first project
        }
      },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({
      message: 'Project updated successfully',
      project: updatedProject // Return the updated project
    });
  } catch (error) {
    handleError(res, 'Error updating project', error);
  }
};


// Delete a project by userId and templateId
exports.deleteProject = async (req, res) => {
  try {
    const { id, templateId } = req.params;
    const deletedProject = await Projects.findOneAndDelete({ _id: id, templateId });

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    handleError(res, 'Error deleting project', error);
  }
};
