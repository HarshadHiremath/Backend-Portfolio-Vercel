import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
{
  user: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String }
},
{
  timestamps: true
}
);

export default mongoose.model("Contact", contactSchema);