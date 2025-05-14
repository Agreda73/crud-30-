import { Schema, model } from "mongoose";

const clientsSchema = new Schema(
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
    status:{
        type: Boolean
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Clients", clientsSchema);