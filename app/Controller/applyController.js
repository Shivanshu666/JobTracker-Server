const mongoose = require("mongoose");
const applyModel = require("../Model/applyModel");

const insertApply = async (req, res) => {
  try {
    const { fullName, email, linkedInLink, hireYou, jobId } = req.body;
    const uploadResume = req.file?.filename || null;

    const apply = new applyModel({
      fullName,
      email,
      linkedInLink,
      uploadResume,
      hireYou,
      jobId,
    });

    const savedApply = await apply.save();
    res.status(201).json({
      status: 1,
      msg: "User Applied successfully",
      userApply: savedApply,
    });
  } catch (err) {
    console.error("Apply Error:", err); // full error in backend terminal
    res.status(500).json({
      status: 0,
      msg: "Apply Fail",
      error: err.message || "Unknown error",
    });
  }
};

const showApply=async(req,res)=>{
  try{
    const show= await applyModel.find();
    res.status(201).json({status:1,msg:"Show Sucessfullly",showApply:show})
    
  }catch(err){
    res.status(501).json({status:0,msg:"Show Apply Error in server"})
  }
}

module.exports = { insertApply ,showApply};
