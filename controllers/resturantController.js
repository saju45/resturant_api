import Resturant from "../models/resturantModel.js";

export const createResturant=async(req,res)=>{

    try {

        console.log(req.body);
        
        const{title,imageurl,foods,time,pickup,delivery,isOpen,logoUrl,
rating,
ratingCount,
code,
coords,
    }= req.body;

        if(!title || !coords){
            return res.status(400).json({
                message:"Please provide all required fields"
            });
        }


        const resturant=await Resturant.create({
            title,
            imageurl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords
        });

        await resturant.save();
        res.status(201).json({
            success:true,
            message:"Resturant created successfully",
            resturant
        });

        

    } catch (error) {
        
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}


export const getAllResturants=async(req,res)=>{
    try {

        const resturants=await Resturant.find({});

        if(resturants.length===0){
            return res.status(404).json({
                message:"No resturants found"
            });
        }


        res.status(200).json({
            success:true,
            message:"All resturants fetched successfully",
            resturants,
            totalCount:resturants.length
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}

export const getResturantById=async(req,res)=>{
    try {
        const {id}=req.params;
        const resturant=await Resturant.findById(id);
        if(!resturant){
            return res.status(404).json({
                message:"Resturant not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Resturant fetched successfully",
            resturant
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}


export const deleteResturant=async(req,res)=>{
    try {
        const {id}=req.params;
        const resturant=await Resturant.findByIdAndDelete(id);
        if(!resturant){
            return res.status(404).json({
                message:"Resturant not found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Resturant deleted successfully",
            resturant
        });
        
    } catch (error) {
        res.status(500).json({
            message:"There was an error in server side",
            error:error.message
        });
    }
}