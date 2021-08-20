"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
//I import the function of the Controlers that Im going to use here
var userControllers_1 = require("../controllers/userControllers");
router.post("/register", userControllers_1.newUser);
router.post("/login", userControllers_1.loginUser);
router.get("/adminPanel", isAdmin, userControllers_1.adminPanel);
function isAdmin(req, res, next) {
    //Read the cookie
    var role = req.cookies.role;
    console.log("El rol es:", role.role);
    if (role.role === "admin") {
        next();
    }
    else {
        res.status(401).send({ message: "You are not allow to see the page" });
    }
}
module.exports = router;
