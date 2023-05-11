const express = require('express');
const imageCarouselController=require ("../controllers/heroImageController");
const upload= require ('../middleware/catupload');

const router = express.Router();

router.get("/", imageCarouselController.getAll);

router.post("/", upload.single("image"), imageCarouselController.createImage);

router.patch("/:id", upload.single("image"), imageCarouselController.updateImage);

router.delete("/:id", imageCarouselController.deleteImage);

module.exports= router;