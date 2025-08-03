const mongoose = require("mongoose");
const UserModel = require("../Model/userModel");
const bcrypt = require("bcryptjs");



const insertUser = async (req, res) => {
  try {
    const { userName, nickName, userEmail, userPassword } = req.body;

    // Check if user already exists
    const existUser = await UserModel.findOne({ userEmail });
    if (existUser) {
      return res.status(400).json({ status: 0, msg: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    // Create new user
    const user = new UserModel({
      userName,
      nickName,
      userEmail,
      userPassword: hashedPassword,
    });

    // Save user to DB
    const savedUser = await user.save();

    res.status(201).json({
      status: 1,
      msg: "User registered successfully",
      userRes: savedUser,
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ status: 0, msg: "Signup failed", error: err.message });
  }
};



const showUser = async (req, res) => {
  try {
    const userList = await UserModel.find();
    res.json({ status: 1, msg: "Data fetched successfully", userRes: userList });
  } catch (err) {
    res.status(500).json({ status: 0, msg: "Error fetching data", error: err.message });
  }
};

const updateUser =  async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, nickName, userEmail, userPassword } = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { userName, nickName, userEmail, userPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    console.error("Update Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ msg: "User Id is Required" })
    }
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ message: "User deleted successfully.", user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user.", error: error.message });
  }
}

module.exports = { insertUser, showUser, updateUser, deleteUser };