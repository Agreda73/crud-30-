import { Schema, model } from "mongoose";

const employeesSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
        type: String
    },
    password: {
        type: String

    },
    telephone: {
        type: String

    },
    address: {
        type: String
    },
    chargue:{
        type: String
    },
    hireDate:{
        type: Date
    },
    salary:{
        type: String
    },
    status:{
        type: Boolean
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Employees", employeesSchema);