const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
  jobsTitle:{
    type: String,
    required: true,
    trim: true,
  },
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  companyDes: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  jobType: {
    type: String,
    required: true,
    trim: true,
  },
});

const JobsModel = mongoose.model("jobsData", JobsSchema);

module.exports = JobsModel;
