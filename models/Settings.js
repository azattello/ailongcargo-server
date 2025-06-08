const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkingHoursSchema = new Schema({
    day: {
        type: String, // 'Monday', 'Tuesday', etc.
        required: true
    },
    from: {
        type: String, // '09:00'
        required: true
    },
    to: {
        type: String, // '18:00'
        required: true
    },
    isClosed: {
        type: Boolean,
        default: false // если true — значит выходной
    }
}, { _id: false });

const SettingsSchema = new Schema({
    videoLink: { type: String, default: '' },
    chinaAddress: { type: String, default: '' },
    whatsappNumber: { type: String, default: '' },
    aboutUsText: { type: String, default: '' },
    prohibitedItemsText: { type: String, default: '' },
    price: { type: String, default: '' },
    currency: { type: String, default: '' },
    globalReferralBonusPercentage: { type: Number, default: 4 },
    contractFilePath: { type: String, default: '' },

    workingHours: {
        type: [WorkingHoursSchema],
        default: []
    }
});

module.exports = mongoose.model('Settings', SettingsSchema);
