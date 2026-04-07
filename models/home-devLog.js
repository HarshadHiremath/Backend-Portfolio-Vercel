import mongoose from "mongoose";

const devLogs = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    value: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const DevLog = mongoose.model("DevLog", devLogs);

export default DevLog;