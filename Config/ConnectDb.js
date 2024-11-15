import mongoose from "mongoose";


const url = "mongodb+srv://hemanthkumarraju2006:2006@erp.uukhi.mongodb.net/"


export const connectDb = async () =>{
    try{
        const con = await mongoose.connect(url);
        console.log("Database Connected");
    }
    catch(err){
        console.log(err);
    }

}

