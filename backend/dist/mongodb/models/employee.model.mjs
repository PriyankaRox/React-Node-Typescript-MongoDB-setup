import mongoose from "mongoose";
const employeeSchema = new mongoose.Schema({
    name: String,
    company: String,
    dob: Number
});
const Employee = mongoose.model("Employee", employeeSchema);
export { Employee };
//# sourceMappingURL=employee.model.mjs.map