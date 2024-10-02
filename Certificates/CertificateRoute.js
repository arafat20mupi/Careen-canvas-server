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

// Get a specific certificate by userId and templateId
router.get('/certificates/:id/:templateId/', getCertificateById);

// Update a certificate by userId and templateId
router.put('/certificates/:id/:templateId', updateCertificate);

// Delete a certificate by userId and templateId
router.delete('/certificates/:id/:templateId', deleteCertificate);

module.exports = router;