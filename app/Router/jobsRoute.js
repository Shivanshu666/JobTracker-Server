const express = require("express");
const jobsRouter = express.Router();

const { insertJobs,showJobs } = require("../Controller/jobsController");

// base route
jobsRouter.get('/jobs', (req, res) => {
    res.send('Jobs SECtion');
});


// Route to insert a Job Data
jobsRouter.post("/insertJobs", insertJobs);

// Route to Show a Job Data


jobsRouter.get("/showJobs", showJobs);



module.exports = jobsRouter;
