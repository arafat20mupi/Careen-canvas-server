const mongoose = require('mongoose');

const CertificatesSchema = new mongoose.Schema({
    certificates: [
        {
            title: {
                type: String,

            },
            institution: {
                type: String,
            },
        },
    ],
    userId: {
        type: String,
        required: true,
        
    },
    templateId: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Certificates = mongoose.model('Certificates', CertificatesSchema);

module.exports = Certificates;