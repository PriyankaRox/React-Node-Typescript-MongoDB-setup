import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
// const MongoDB_Connection_String = `mongodb://localhost`;
// async function connectToMongoDB(connectionString: string) {
//   await mongoose.connect(connectionString);
//   console.log("Connect to MongoDB database");
// }
// try {
//   await connectToMongoDB(MongoDB_Connection_String);
// } catch (e) {
//   console.log("Error connecting to MongoDB:", e);
// }
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Backend! with MongoDB!");
});
app.listen(port, () => {
    console.log(`Server running at port:${port}`);
});
//# sourceMappingURL=app.js.map