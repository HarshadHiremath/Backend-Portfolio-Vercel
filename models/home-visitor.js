import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    ip: String,
    browserName: String,
    osName: String,
    device: String,
    deviceBrand: String,
    language: String,
    referrer: String,
    screenSize: String,
    page: String,
    sessionId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Visitor", visitorSchema);