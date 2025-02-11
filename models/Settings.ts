import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema(
  {
    lightLogo: {
        type: String,
        required: true,
    },
    darkLogo: {
        type: String,
        required: true,
    },
    heroTitle: {
        type: String,
        required: true,
    },
    heroSubTitle: {
        type: String,
        required: true,
    },
    heroBackgroundPhoto: {
        type: String,
        required: true,
    },
    contactPhoneNumber: {
        type: String,
        required: true,
    },
    contactEmail: {
        type: String,
        required: false,
    },
    insatagramLink: {
        type: String,
        required: false,
    },
    facebookLink: {
        type: String,
        required: false,
    },
    linkedInLink: {
        type: String,
        required: false,
    },
  },
  { timestamps: true }
);

const Settings = mongoose.models.Settings || mongoose.model('Settings', settingsSchema);
export default Settings;