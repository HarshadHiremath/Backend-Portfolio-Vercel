import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
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

export default mongoose.model("Achievement", achievementSchema);