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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    templateId: {
        type: String,
    },
}, { timestamps: true });

const Certificates = mongoose.model('Certificates', CertificatesSchema);

module.exports = Certificates;
