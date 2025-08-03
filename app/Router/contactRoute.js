const express = require("express");
const contactRouter = express.Router();
const { insertContact, showContact } = require("../Controller/contactController")

// Base Route
contactRouter.get("/contact", (req, res) => {
    res.send('Contact Section');
})

// insert Contact
contactRouter.post("/insertContact", insertContact)


// show Contact 
contactRouter.get("/showContact", showContact)



module.exports = contactRouter;
