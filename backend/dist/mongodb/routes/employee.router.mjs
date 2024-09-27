import express from "express";
const router = express.Router();
import { Employee } from "../models/employee.model.mjs";
//get method
router.get("/getEmployee", async (req, res) => {
    try {
        const data = await Employee.find({});
        console.log("Employee Retrieved");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retireveing employee:", e);
    }
});
export { router };
//# sourceMappingURL=employee.router.mjs.map