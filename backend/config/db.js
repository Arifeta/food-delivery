import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arifetamulugeta:arifa116@cluster0.nhp8a.mongodb.net/food-del').then(()=>console.log("DB connected"))
}