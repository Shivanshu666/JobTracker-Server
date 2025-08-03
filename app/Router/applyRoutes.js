const express=require("express");
const applyRoutes=express.Router();
const {insertApply,showApply}=require("../Controller/applyController")
const upload=require("../../Middleware/uploads")


applyRoutes.get("/",(req,res)=>{
    res.send({status:201,msg:"Apply ROutes Is working"})
})

applyRoutes.post("/insertApply",upload.single("uploadResume"),insertApply);

applyRoutes.get("/showApply",showApply);




module.exports=applyRoutes;