import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router as employeeRouter } from "./mongodb/routes/employee.router.mjs";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
//connect to MongoDB database
const MongoDB_Connection_String = process.env.MONGODB_URI;
if (!MongoDB_Connection_String) {
    throw new Error("MongoDB URL not defined");
}
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MongoDB_Connection_String);
        console.log("Connected to MongoDB database");
    }
    catch (e) {
        console.error("Error connecting to MongoDB:", e);
    }
};
// Call the function to connect to MongoDB
connectToMongoDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use("/api", employeeRouter);
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Backend! with MongoDB! haiya");
});
app.listen(port, async () => {
    console.log(`App is listening at port:${port}`);
});
//# sourceMappingURL=app.mjs.map