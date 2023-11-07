/**
 * @module models/categories
 * @requires mongoose
 * @exports Category
 * @description This module contains the mongoose model for categories.
 */

import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
    index: true,
  },
}, { autoIndex: false });


const Category = mongoose.model("Category", categorySchema);

export default Category;
