import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "HMS_EPICS"
    }).then(()=>{
        console.log("connected to db")
    }).catch((err)=>{
        console.log(`Error is ${err}`);
    });
}