const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema(
    {
        clientId: {
            type: String,
            required: true,
            default: []
        },
        name: {
            type: String,
            required: [true, 'Please enter contact name']
        },
        emails: {
            type: [String],
            required: false,
            default: []
        },
        telephones: {
            type: [String],
            required: false,
            default: []
        }
    },
    {
        timestamps: true
    }
)

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;