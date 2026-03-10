import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true},
    description: { type: String, required: true, trim: true },
    image: { type: String, trim: true },
    techStack: [{ type: String, trim: true }],
    liveLink: { type: String, trim: true},
    githubLink: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);