import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
{
  role: {
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
  description: {
    type: String,
    required: true,
    trim: true
  },
},
{ timestamps: true }
);

export default mongoose.model("Experience", experienceSchema);