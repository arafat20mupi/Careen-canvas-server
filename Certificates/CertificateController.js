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

// Get all certificates
exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificates.find().populate('userId', 'name email');
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching certificates', error });
  }
};

// Get a specific certificate by ID
exports.getCertificateById = async (req, res) => {
  try {
    const { id } = req.params;
    const certificate = await Certificates.findById(id).populate('userId', 'name email');
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching certificate', error });
  }
};

// Update a certificate by ID
exports.updateCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCertificate = await Certificates.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCertificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.status(200).json({ message: 'Certificate updated successfully', certificate: updatedCertificate });
  } catch (error) {
    res.status(500).json({ message: 'Error updating certificate', error });
  }
};

// Delete a certificate by ID
exports.deleteCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCertificate = await Certificates.findByIdAndDelete(id);
    if (!deletedCertificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.status(200).json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting certificate', error });
  }
};
