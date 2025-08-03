// For Login Form Logic 

const userModel = require("../Model/userModel")
const bcrypt = require("bcryptjs");  // for password ko phele jaisa karne ke liye
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_secret_key_here";


const insertLogin = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;
        // console.log("reqbody",req.body);
        //  console.log("Searching for user with email:", userEmail.trim().toLowerCase());
        

        //  Check if user exists
  const user = await userModel.findOne({ userEmail: userEmail.trim().toLowerCase() });
    console.log("User searched:", user);

        if (!user) {
            //  Return here to prevent further execution
            return res.status(404).send("User not found. Please sign up first.");
        }

        //  Compare password
        const isMatch = await bcrypt.compare(userPassword, user.userPassword);

        if (!isMatch) {
            return res.status(401).send("Invalid email or password.");
        }

        //  Generate JWT Token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).send("Server error");
    }
};

module.exports = { insertLogin };
