import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import {router as employeeRouter} from "./mongodb/routes/employee.router.mjs"; 

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 5000;

//connect to MongoDB database
const MongoDB_Connection_String = `mongodb+srv://priyankavrokhade:Priyanka%40123@cluster0.lfih2iu.mongodb.net/EmployeeDB?retryWrites=true&w=majority`;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MongoDB_Connection_String);
    console.log("Connected to MongoDB database");
  } catch (e) {
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

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome to Backend! with MongoDB!");
});

app.listen(port, async () => {
  console.log(`App is listening at port:${port}`);
});
