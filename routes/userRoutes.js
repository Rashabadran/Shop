

const express=require("express");



const controll= require("../controllers/userController")

const router=express.Router();
const {protect}=require('../middleware/authMiddleware');
const { get } = require("mongoose");

router.post("/",controll.registerUser);
router.post("/login",controll.loginUser);


router.get("/me", protect ,controll.getUser);
// router.put("/",controll.updater);
// router.delete("/",controll.deleter)

router.get("/all",controll.getAllUser)

router.get("/allE/:email",controll.getUserByEmail)

module.exports = router;