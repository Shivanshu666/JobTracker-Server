const mongoose=require("mongoose");
const contactModel=require("../Model/ContactModel");

const insertContact= async (req,res)=>{
    const{name,email,message}=req.body;
    try{
    const newContacts= new contactModel({
        name,
        email,
        message,
    });

    await newContacts.save();
    res.status(200).send({msg:"Contact Send Successfully"});
    }catch(err){
        return res.status(500).send({msg:"Contact not Send"})
    }

}

const showContact = async (req, res) => {
  try {
    const contacts = await contactModel.find();
    res.status(200).send({
      msg: "Contacts fetched successfully",
      data: contacts,
    });
  } catch (err) {
    res.status(500).send({
      msg: "Failed to fetch contacts", err});
  }
};


module.exports={insertContact,showContact};