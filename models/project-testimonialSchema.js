import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    quote: { type: String, required: true, trim: true },
    source: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);