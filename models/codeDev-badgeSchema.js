import mongoose from "mongoose";

const badgeSchema = new mongoose.Schema(
{
  name: { type: String, required: true, trim: true },
  platform: { type: String, required: true, trim: true },
  logo: { type: String, trim: true },
},
{ timestamps: true }
);

export default mongoose.model("Badge", badgeSchema);