import mongoose from "mongoose";
//product/schema

const productServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ["Software", "Service"], required: true },
    price: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    rating: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    version: { type: String, default: "", validate: { validator: function() { return this.type === "Software"; } } },
    licensing: { type: String, default: "", validate: { validator: function() { return this.type === "Software"; } } },
    duration: { type: Number, default: 0, validate: { validator: function() { return this.type === "Service"; } } },
    tags: [{ type: String }],
});

//create product /service schema
const productService = mongoose.model("ProductService", productServiceSchema);

export default productService;