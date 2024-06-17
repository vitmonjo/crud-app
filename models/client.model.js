import mongoose from 'mongoose';

const ClientSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter client name']
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
);

const Client = mongoose.model('Client', ClientSchema);

export default Client;