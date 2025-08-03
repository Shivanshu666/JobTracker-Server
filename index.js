const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");

const userRouter = require("./app/Router/userRoute");
const jobsRouter = require("./app/Router/jobsRoute");
const contactRouter = require("./app/Router/contactRoute");
const authRoutes = require("./app/Router/authRoutes");
const applyRoutes = require("./app/Router/applyRoutes");

app.use(express.json());
const cors = require("cors");
app.use(cors());
const PORT=process.env.PORT||8000

app.use('/user', userRouter);
app.use('/jobs', jobsRouter);
app.use('/contact', contactRouter);
app.use("/auth",authRoutes);
app.use("/apply",applyRoutes);

// u4PkvGjZ94WHofVt



// configuration for multer funtion
const path = require("path");
app.use("/uploadss", express.static(path.join(__dirname, "uploadss")));

// MongoDB Connection
mongoose.connect(process.env.DBCONNECT)
  .then(() => {
    console.log('Mongoose is connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
