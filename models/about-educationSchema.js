import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
{
  institution: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
},
{ timestamps: true }
);

export default mongoose.model("Education", educationSchema);