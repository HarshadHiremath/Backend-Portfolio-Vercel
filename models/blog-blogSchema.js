import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Blog", blogSchema);