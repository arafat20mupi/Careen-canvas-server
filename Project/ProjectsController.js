const Projects = require("./projectSchema");

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, description, userId, templateId } = req.body;
    const newProject = new Projects({ title, description, userId, templateId });
    await newProject.save();
    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Projects.find().populate('userId', 'name email'); // Populate with user details if needed
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

// Get a specific project by ID
exports.getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projects.findById(id).populate('userId', 'name email');
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error });
  }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Projects.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project updated successfully', project: updatedProject });
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error });
  }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
  try {
    const { id
