import Food from "../models/foodModel.js";


// export const createFood=async(req,res)=>{
//     try {
//         const {title,description,category,price,imageUrl,foodTags,Food,code,isAvailable,resturant,rating,ratingCount}=req.body;

//         if(!title || !description || !category || !price || !resturant){
//             return res.status(400).json({
//                 message:"Please provide all required fields"
//             });
//         }

//         const food=await Food.create({
//             title,
//             description,
//             category,
//             price,
//             imageUrl,
//             foodTags,
//             Food,
//             code,
//             isAvailable,
//             resturant,
//             rating,
//             ratingCount
//         });

//         await food.save();
//         res.status(201).json({
//             success:true,
//             message:"Food created successfully",
//             food
//         });
        
//     } catch (error) {
//         res.status(500).json({
//             message:"There was an error in server side",
//             error:error.message
//         });

//         console.log(error);
        
//     }
// }


export const createFood=async(req,res)=>{
    try {

        const food=await Food.create(req.body);
        await food.save();
        res.status(201).json({
            success:true,
            message:"Food created successfully",
            food
        }); 
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
        
    }
}


export const getAllFoods=async(req,res)=>{
    try {
        const foods=await Food.find({}).populate("category").populate("resturant");

        if(foods.length===0){
            return res.status(404).json({
                message:"No foods found"
            });
        }
        res.status(200).json({
            success:true,
            foods
        });
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const getFoodById=async(req,res)=>{
    try {
        const {id}=req.params;
        const food=await Food.findById(id).populate("category").populate("resturant");

        if(!food){
            return res.status(404).json({
                message:"Food not found"
            });
        }

        res.status(200).json({
            success:true,
            food
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const getFoodsByCategory=async(req,res)=>{
    try {
        const {categoryId}=req.params;
        const foods=await Food.find({category:categoryId}).populate("category").populate("resturant");

        if(foods.length===0){
            return res.status(404).json({
                message:"No foods found for this category"
            });
        }

        res.status(200).json({
            success:true,
            foods
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

// export const updateFood=async(req,res)=>{
//     try {
//         const {id}=req.params;
//         console.log({id});
        
//         // const food=await Food.findById(id); 

//         // const food=await Food.findById(id);
//         let food={};
//         console.log({id,food});
        
//         // if(!food){
//         //     return res.status(404).json({
//         //         message:"Food not found"
//         //     });
//         // }
//         const {title,description,category,price,imageUrl,foodTags,Food,code,isAvailable,resturant,rating,ratingCount}=req.body;

//         if (!title || !description || !category || !price || !resturant) {
//             return res.status(400).json({
//                 message: "Please provide all required fields"
//             });
            
//         }
//         if(title){
//             food.title=title;
//         }
//         if(description){
//             food.description=description;
//         }
//         if(category){
//             food.category=category;
//         }
//         if(price){
//             food.price=price;
//         }
//         if(imageUrl){
//             food.imageUrl=imageUrl;
//         }
//         if(foodTags){
//             food.foodTags=foodTags;
//         }
//         if(Food){
//             food.Food=Food;
//         }
//         if(code){
//             food.code=code;
//         }
//         if(isAvailable){
//             food.isAvailable=isAvailable;
//         }

//         if(resturant){
//             food.resturant=resturant;
//         }
//         if(rating){
//             food.rating=rating;
//         }
//         if(ratingCount){
//             food.ratingCount=ratingCount;
//         }
//         // await food.save();
//         food=await Food.findOneAndUpdate({_id:id},food);
//         res.status(200).json({
//             success:true,
//             message:"Food updated successfully",
//             food
//         });
//     } catch (error) {
//         res.status(500).json({
//             message:"There was an error in server side",
//             error:error.message
//         });
//     }
// }

export const updateFood=async(req,res)=>{
    try {
        const {id}=req.params;
        let food=await Food.findById(id);
        if(!food){
            return res.status(404).json({
                message:"Food not found"
            });
        }

        food=await Food.findOneAndUpdate({_id:id},req.body,{new:true,runValidators:true});
        res.status(200).json({
            success:true,
            message:"Food updated successfully",
            food
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
        
    }
}

export const deleteFood=async(req,res)=>{
    try {
        const {id}=req.params;

        console.log({id});
        
        const food=await Food.findOneAndDelete(id);
        if(!food){
            return res.status(404).json({
                message:"Food not found"
            });
        }

        // await food.remove();
        res.status(200).json({
            success:true,
            message:"Food deleted successfully",
            food
        });
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}