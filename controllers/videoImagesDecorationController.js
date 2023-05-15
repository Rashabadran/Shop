
const express = require('express');
const Product = require('../Models/videoImagesDecorationModel');
const cloudinary= require ('cloudinary').v2;
const Category=require('../Models/decorationCategoryModel');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
   

});



//create a product
const createProduct = async (req, res) => {
  
  try {
    let images = [];
   
    if (req.files && req.files.length > 0) {
      for (let i = 0; i < req.files.length; i++) {
        const uploadedImage = await cloudinary.uploader.upload(req.files[i].path);
        images.push({
          public_id: uploadedImage.public_id,
          url: uploadedImage.secure_url,
        });
      }
    }
    
   
    
    const product = new Product({
      title:req.body.title,
      description:req.body.description,
      image:images,
      category: req.body.category,
    });
 

    await product.save();
    //await discounts.updateDescription(product._id, categorys);
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};



// READ all products
// {path: "category", select: "name"}
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
   
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

// READ a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("decorationcategory");
    if (!product) {
      return res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

// UPDATE a product by ID
const updateProductById = async (req, res) => {
  try {
    const item = await Product.findById(req.params.id); 
    

    if (req.body.title) {
      item.title = req.body.title;
    }
    if (req.body.description) {
      item.description = req.body.description;
    }

    const updatedItem = await item.save(); 
    return res.status(200).json(updatedItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: true, message: 'Server error' });
  }
};

/////

//get product by category
const getItemsByCategory = async (req, res) => {
 
  try{
  const category_id = req.params.category_id;
  const item = await Product.find({ category: category_id }).populate("category");

  res.status(200).json(item);
  }
  catch(err){
  res.json({ message: err });
  }
  };

  //get product by category name
const getItemsByCategoryName = async (req, res) => {
 try {
    const categoryName = req.params.category;
    const items = await Product.aggregate([
      {
        $lookup: {
          from: "decorationCategories",
          localField: "decorationcategory",
          foreignField: "_id",
          as: "decorationcategory",
        },
      },
      {
        $unwind: "$decorationcategory",
      },
      {
        $match: {
          "category.name": categoryName,
        },
      },
    ]);
 
    res.status(200).json(items);
  } catch (err) {
    res.json({ message: err });
  }
};




// DELETE a product by ID
const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send("Not found");
    }
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};



module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    getItemsByCategory,
    getItemsByCategoryName
}