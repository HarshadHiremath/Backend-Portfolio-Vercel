import mongoose from "mongoose";

const linksSchema = new mongoose.Schema({
  gmail: { type: String, default: "" },
  phone: { type: String, default: "" },
  linkedIn: { type: String, default: "" },
  instagram: { type: String, default: "" },
  youtube: { type: String, default: "" },
  github: { type: String, default: "" },
  Location: { type: String, default: "" },
  LocationLink: { type: String, default: "" },
  twitter: { type: String, default: "" },
  resume: { type: String, default: "" }
});

export default mongoose.model("Link", linksSchema);