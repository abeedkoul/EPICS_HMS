import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First name must contain minimum 3 letters!"]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last name must contain minimum 3 letters!"]
    },
    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide correct email!"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [10, "Phone number must contain 10 digits!"],
        maxLength: [10, "Phone number must contain 10 digits!"]
    },
    message:{
        type: String,
        required: true,
        minLength: [10, "Message must minimum contain 10 characters!"]
    }
});

export const Message = mongoose.model("Message", messageSchema);