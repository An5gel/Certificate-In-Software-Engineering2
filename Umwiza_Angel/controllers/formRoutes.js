const express = require('express');
const router = express.Router();

const Kycform = require("../models//formModels");

// form route
router.get("/form", (req,res) =>{
    res.render("genqform.pug")
});

router.post("/form", async (req, res) => {
    try{
        console.log(req.body);
        const client = new Kycform(req.body);
        await client.save();
        console.log(req.body);
        res.redirect("form"); 
    } catch(error){
        res.status(400).render("genqform.pug")
        console.log(error);
    }
});








module.exports = router










