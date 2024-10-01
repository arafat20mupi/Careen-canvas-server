const express = require('express');
const {
  createCertificate,
  getAllCertificates,
  getCertificateById,
  updateCertificate,
  deleteCertificate,
} = require('./CertificateController');

const router = express.Router();

// Create a new certificate
router.post('/certificates', createCertificate);

// Get all certificates
router.get('/certificates', getAllCertificates);

// Get a certificate by ID
router.get('/certificates/:id', getCertificateById);

// Update a certificate by ID
router.put('/certificates/:id', updateCertificate);

// Delete a certificate by ID
router.delete('/certificates/:id', deleteCertificate);

module.exports = router;
