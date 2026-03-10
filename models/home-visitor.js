import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
    },
    userAgent: {
      type: String,
    },
    visitDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Visitor = mongoose.model("Visitor", visitorSchema);

export default Visitor;