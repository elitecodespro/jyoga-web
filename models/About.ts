import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema(
  {
    aboutUs: {
        type: String,
        required: true,
    },
    yogaMeaning: {
        type: String,
        required: true,
    },
    aboutPhoto: {
        type: String,
        required: true,
    },
    yogaPhoto: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.model('About', aboutSchema);
export default About;