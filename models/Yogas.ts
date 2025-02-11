import mongoose from 'mongoose';

const yogasSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Yogas = mongoose.models.Yogas || mongoose.model('Yogas', yogasSchema);
export default Yogas;