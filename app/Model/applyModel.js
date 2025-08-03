const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  linkedInLink: {
    type: String,
    required: true,
  },
  uploadResume:{
        type:String,
        default:null,
    },
  hireYou: {
    type: String,
    required: true,
  },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
});

const applyModel = mongoose.model("applyDetails", applySchema);
module.exports = applyModel;
