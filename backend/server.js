import app from "./app.js";
import {v2} from "cloudinary"
import dotenv from 'dotenv';  // Import dotenv
dotenv.config();  // Load environment variables


// console.log("lol")
// const abeed = () =>{
//     let y = 24;
//     let x = 77

// }

// abeed()

v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening on ports ${process.env.PORT}`)

})