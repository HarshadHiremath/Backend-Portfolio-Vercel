import mongoose from "mongoose";

const marqueeSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true},
  },
  { timestamps: true }
);

export default mongoose.model("Marquee", marqueeSchema);