export {};
const express = require("express");
const router = express.Router();

//I import the function of the Controlers that Im going to use here
import { newUser, loginUser, adminPanel } from "../controllers/userControllers";

router.post("/register", newUser);
router.post("/login", loginUser);
router.get("/adminPanel", isAdmin, adminPanel);

function isAdmin(req, res, next) {
  //Read the cookie
  const { role } = req.cookies;
  console.log("El rol es:", role.role);

  if (role.role === "admin") {
    next();
  } else {
    res.status(401).send({ message: "You are not allow to see the page" });
  }
}

module.exports = router;
