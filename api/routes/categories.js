const router = require('express').Router();
const Category = require("../models/Category");

router.post("/",async(req,res) => {
    const newcat = new Category(req.body);
    try{
        const savedCat = await newcat.save()
        return res.status(200).json(savedCat)

    }catch(err){
        return res.status(500).json(err)
    }
})

//get

router.get("/",async(req,res) => {
    try{
        const savedCat = await Category.find();
        return res.status(200).json(savedCat)

    }catch(err){
        return res.status(500).json(err)
    }
})
module.exports = router