import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_STRING = process.env.MONGO_URI;

const dbConfig=()=>{
    try {
        mongoose.connect(DB_STRING);
        console.log("Database connected successfully.");
    } catch (error) {
        console.log(error);
    }
}
export default dbConfig;