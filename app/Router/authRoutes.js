const express=require("express");

const authRoutes=express.Router();
const {insertLogin}=require("../Controller/authController")

// base Route
authRoutes.get("/",(req,res)=>{
  res.send({status:201,msg:"Authentication for check inligon"})
});

authRoutes.post("/insertLogin", insertLogin)

module.exports=authRoutes;