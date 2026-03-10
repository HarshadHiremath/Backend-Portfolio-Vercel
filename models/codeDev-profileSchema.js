import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
{
  platform: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  profileLink: { type: String, required: true, trim: true},
  questionsSolved: { type: Number, required: true, min: 0 },
  rank: { type: String, trim: true},
  logo: { type: String, trim: true },
},
{ timestamps: true }
);

export default mongoose.model("Profile", profileSchema);