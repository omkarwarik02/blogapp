const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const cookiePaser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");
const app = express();
const PORT = 8001;


mongoose.connect('mongodb://localhost:27017/blogi').then((e) => console.log("mongo connected"));

app.set("view engine", "ejs")
app.set("views",path.resolve("./views"));
app.get("/", (req,res) =>{
    res.render("home",{
        user: req.user,
    });
});
app.use(express.urlencoded({extended:false}));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use("/user", userRoute);
app.use("./user",blogRoute);
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
