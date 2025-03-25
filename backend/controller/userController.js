import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js"
import ErrorHandler from "../middlewares/errorMiddleware.js"
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js"
import cloudinary from "cloudinary"

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, password, gender, dob, aadhar, role } = req.body;
    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !aadhar || !role){
        return next( new ErrorHandler("Please Fill Full Form!", 400));
    }
    let user = await User.findOne({email});
    if(user){
        return next( new ErrorHandler("User Already Registered", 400));
    }
    user = await User.create({firstName, lastName, email, phone, password, gender, dob, aadhar, role});
    generateToken(user,"User Registered",200,res);
})

export const login = catchAsyncErrors(async(req, res, next)=>{
    console.log("🔹 Login request received:", req.body);
    const {email, password, confirmPassword, role} = req.body;
    if(!email || !password || !confirmPassword || !role){
        return next(new ErrorHandler("All Details Are Not Provided", 400));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("Passwords Do Not match", 400));
    }
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Password or Email", 400));
    }
    const isPasswordMatch = await user.checkPass(password);
    if(!isPasswordMatch){
        return next(new ErrorHandler("Invalid Password or Email", 400));
    }
    if(role !== user.role){
        return next(new ErrorHandler("User With This Role Not Found", 400));
    }
    generateToken(user,"User Logged In Succesfully",200,res);
})

export const addNewAdmin = catchAsyncErrors(async(req,res,next)=>{
    const {
        firstName, lastName, email, phone, password, gender, dob, aadhar
    } = req.body;
    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !aadhar){
        return next( new ErrorHandler("Please Fill Full Form!", 400));
    }
    const isResgistered = await User.findOne({email});
    if(isResgistered){
        return next(new ErrorHandler(`${isResgistered.role} With This Email Already Exists`))
    }
    const admin = await User.create( {firstName, lastName, email, phone, password, gender, dob, aadhar, role: "Admin"})
    res.status(200).json({
        success: true,
        message: "New Admin Registered" 
    })
})

export const getAllDoctors = catchAsyncErrors(async(req,res,next)=>{
    const doctors = await User.find({role: "Doctor"});
    res.status(200).json({
        success: true,
        doctors
    })
})


export const getUserDetails = catchAsyncErrors(async(req,res,next)=>{
    const user = req.user;
    res.status(200).json({
        succesful: true,
        user
    })
})

export const logoutAdmin = catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("adminToken",null,{
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Admin Logged Out Successfully"
    });
})


export const logoutPatient = catchAsyncErrors(async(req,res,next)=>{
    res.status(200).cookie("patientToken",null,{
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Patient Logged Out Successfully"
    });
})


export const addNewDoctor = catchAsyncErrors(async(req,res,next)=>{
    if(!req.files || Object.keys(req.files).length === 0){
        return next (new ErrorHandler("Doctor Avatar Required",400));
    }
    const {docAvatar} = req.files;
    const allowedFormats = ["image/png","image/jpeg","image/webp","image/jpg","image/avif"];
    if(!allowedFormats.includes(docAvatar.mimetype)){
        return next( new ErrorHandler("File Format Not Supported",400));
    }
    const {firstName, lastName, email, phone, password, gender, dob, aadhar, doctorDepartment} = req.body;
    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !aadhar || !doctorDepartment){
        return next( new ErrorHandler("Please Provide Full Details!", 400));
    }
    const isResgistered = await User.findOne({email});
    if(isResgistered){
        return next( new ErrorHandler(`${isResgistered.role} Already Registered With This Email`, 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);
    if(!cloudinaryResponse || cloudinaryResponse.error){
        console.error("Cloudinary Error: ",cloudinaryResponse.error||"Unknown Cloudinary Error");
    }
    const doctor = await User.create({ firstName, lastName, email, phone, password, gender, dob, aadhar, doctorDepartment, role: "Doctor", 
        docAvatar: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
    }})
    res.status(200).json({
        success: true,
        message: "Doctor Registered Successfully",
        doctor
    })
})