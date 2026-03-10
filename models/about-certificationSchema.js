import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
    trim: true,
  },
  logo: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    trim: true,
  },
},
{ timestamps: true }
);

export default mongoose.model("Certification", certificationSchema);