import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";
dotenv.config();
const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURI), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        console.log(chalk.bgGreenBright.black.bold("MongoDB connected successfully"));

    } catch (error) {
        console.log(chalk.bgRedBright.bold("MongoDB connection failed:", error.message));

    }
}
export default ConnectDB;