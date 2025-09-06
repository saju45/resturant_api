import Category from "../models/categoryModel.js";

export const createCategory=async(req,res)=>{
    try {
        const {title,imageUrl}=req.body;
        if(!title){
            return res.status(400).json({
                message:"Title is required"
            });
        }

        const existingCategory=await Category.findOne({title});
        if(existingCategory){
            return res.status(400).json({
                message:"Category already exists"
            });
        }

        const category=await Category.create({
            title,
            imageUrl
        });

        res.status(201).json({
            success:true,
            message:"Category created successfully",
            category
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const getAllCategories=async(req,res)=>{
    try {
        const categories=await Category.find({});

        if(categories.length===0){
            return res.status(404).json({
                message:"No categories found"
            });
        }
        res.status(200).json({
            success:true,
            categories
        });
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const getCategoryById=async(req,res)=>{
    try {
        const {id}=req.params;
        const category=await Category.findById(id);

        if(!category){
            return res.status(404).json({
                message:"Category not found"
            });
        }

        res.status(200).json({
            success:true,
            category
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const updateCategory=async(req,res)=>{
    try {
        const {id}=req.params;
        const {title,imageUrl}=req.body;

        const category=await Category.findById(id);
        if(!category){
            return res.status(404).json({
                message:"Category not found"
            });
        }

        if(title){
            category.title=title;
        }
        if(imageUrl){
            category.imageUrl=imageUrl;
        }

        await category.save();

        res.status(200).json({
            success:true,
            message:"Category updated successfully",
            category
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const deleteCategory=async(req,res)=>{
    try {
        const {id}=req.params;
        const category=await Category.findByIdAndDelete(id);
        if(!category){
            return res.status(404).json({
                message:"Category not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Category deleted successfully",
            category
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}