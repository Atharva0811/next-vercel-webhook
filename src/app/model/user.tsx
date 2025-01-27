import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
  },
  { timestamps: true }
);

const user = mongoose.models.user || mongoose.model("user", eventSchema);

export default user; 
