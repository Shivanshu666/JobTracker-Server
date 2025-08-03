const express = require("express");
const userRouter = express.Router();



// Import controller functions
const { insertUser, showUser, updateUser, deleteUser } = require("../Controller/userController");

// Base route
userRouter.get('/', (req, res) => {
    res.send('Hello');
});

// Route to insert a user
userRouter.post("/insertUser", insertUser);

// Route to show users
userRouter.get("/showUser", showUser);

// update user
userRouter.put("/updateUser/:id", updateUser);

// Route to show users
userRouter.delete('/deleteUser/:id', deleteUser);





module.exports = userRouter;
