const { Router } = require("express");

const Blog = require("../models/blog");
const path = require("path");

const router = Router();

router.get("/add-new", (req,res)=>{
    return res.render("addBlog",{
        user: req.user,
    });
});












module.exports = router;
