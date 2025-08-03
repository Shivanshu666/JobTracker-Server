const mongoose = require("mongoose");
const JobsModel = require("../Model/JobsModel");

/// insert
const insertJobs = async (req, res) => {
  const {
    jobsTitle,
    companyName,
    companyDes,
    salary,
    location,
    jobType,
  } = req.body;
  try {
    const existingJob = await JobsModel.findOne({ jobsTitle, companyName });
    if (existingJob) {
      return res
        .status(404)
        .send({ msg: "Job already exists with this title and company." });
    }

    const newJobs = new JobsModel({
      jobsTitle,
      companyName,
      companyDes,
      salary,
      location,
      jobType,
    });
    await newJobs.save();
    res.status(200).send({ msg: "Upload Jobs Successfully" });
    navigate("/");
  } catch (err) {
    // console.error("Insert Error", err);
    return res.status(500).send({ msg: "Something Is Wrong" });
  }
};
// show Jobs

const showJobs = async (req, res) => {
  try {
    const jobList = await JobsModel.find();
    res.send({ msg: "Show JObs", jobList });
  } catch (err) {
    res.send({ msg: "not Show Data", err: err.msg });
  }
};

module.exports = { insertJobs, showJobs };
