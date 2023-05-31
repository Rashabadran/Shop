  
const CategoryModel = require('../Models/balloonsCategoryModel')


// get all category
const getCategoris = async(req, res) => {
const categoris = await CategoryModel.find()

    res.status(200).json(categoris)
}

//get by Id
const getCategoryById = async (req, res) => {
    try {
     
      if (!category) {
        return res.status(404).send();
      }
      res.json(category);

    } catch (error) {
      res.status(500).send(error);
    }
  };





 /* const getCategoryBySeason = async(req, res) => {
    try {
      
      const season = req.params.season;
    
      const filter = season ? { season } : {}; 
      const categorySea = await CategoryModel.find(filter);
      
      res.status(200).json(categorySea);
    } catch (error) {
      res.status(500).send(error);
    }
  };*/
  














  
const setCategory=async(req,res)=>{
    
    try{
     
    if(!req.body){
        return res.status(400).json({message:"Error"})
    }
    else{


        const category =await CategoryModel.create({
        cattitle:req.body.cattitle,
        
       

            });

       return res.status(200).json({message: "category created successfully"})
    }}
    catch(err){
        console.log("error ",err)
    }
}


const updateCategory = async (req, res) => {
  const category =await CategoryModel.findById(req.params.id)
  
  
  if (!category){
      res.status(400)
      throw new Error('Category not found')
  }
  const updatedCategory = await CategoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true,})
  
      res.status(200).json(updatedCategory);
  }


const deleteCategory =  async(req, res) => {
    const category =await CategoryModel.findById(req.params.id)

if (!category){
    res.status(400)
    throw new Error('Category not found')
}
 await category.deleteOne()
    res.status(200).json({id: req.params.id})
}

module.exports ={
    getCategoris,
    getCategoryById,
    
    setCategory,
    updateCategory,
    deleteCategory,
}