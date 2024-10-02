const Certificates = require("./certificatesSchema");

// Create a new certificate
exports.createCertificate = async (req, res) => {
  try {
    const { title, institution, userId, templateId } = req.body;

    const newCertificate = new Certificates({
      certificates: [{ title, institution }],
      userId,
      templateId,
    });

    await newCertificate.save();
    res.status(201).json({ message: 'Certificate created successfully', certificate: newCertificate });
  } catch (error) {
    res.status(500).json({ message: 'Error creating certificate', error });
  }
};
// Get all certificates by userId and templateId
exports.getAllCertificates = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters
    const certificates = await Certificates.find({ userId: id, templateId: templateId }).populate('userId', 'name email');

    if (certificates.length === 0) {
      return res.status(404).json({ message: 'No certificates found for this user and template.' });
    }

    return res.status(200).json(certificates);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching certificates', error: error.message });
  }
};

// Get a specific certificate by userId and templateId
exports.getCertificateById = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters
    const certificate = await Certificates.findOne({ userId: id, templateId: templateId }).populate('userId', 'name email');

    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found for this user and template.' });
    }

    return res.status(200).json(certificate);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching certificate', error: error.message });
  }
};

// Update a certificate by userId and templateId
exports.updateCertificate = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters
    const updatedCertificate = await Certificates.findOneAndUpdate(
      { userId: id, templateId: templateId },  // Find the certificate by userId and templateId
      req.body, 
      { new: true, runValidators: true } // Return the updated document and validate
    );

    if (!updatedCertificate) {
      return res.status(404).json({ message: 'Certificate not found for this user and template.' });
    }

    return res.status(200).json({ message: 'Certificate updated successfully', certificate: updatedCertificate });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating certificate', error: error.message });
  }
};

// Delete a certificate by userId and templateId
exports.deleteCertificate = async (req, res) => {
  try {
    const { id, templateId } = req.params; // Get userId and templateId from request parameters
    const deletedCertificate = await Certificates.findOneAndDelete({ userId: id, templateId: templateId });

    if (!deletedCertificate) {
      return res.status(404).json({ message: 'Certificate not found for this user and template.' });
    }
    
    return res.status(200).json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting certificate', error: error.message });
  }
};