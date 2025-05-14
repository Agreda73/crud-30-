import { Schema, model } from "mongoose";

const moviesSchema = new Schema(
  {
    title: {
      type: String
    },
    description: {
        type: String
    },
    director: {
        type: String
    },
    gender: {
        type: String
    },
    year: {
        type: Date
    },
    duration:{
        type: String
    },
    image:{
        type: String
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Movies", moviesSchema);