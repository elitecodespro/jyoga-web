import mongoose from 'mongoose';

const servicesSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    serviceType: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Services = mongoose.models.Services || mongoose.model('Services', servicesSchema);
export default Services;