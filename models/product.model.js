import mongoose, { mongo } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - quantity
 *         - price
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the product
 *           example: "Sample Product"
 *         quantity:
 *           type: number
 *           description: Quantity of the product
 *           example: 10
 *         price:
 *           type: number
 *           description: Price of the product
 *           example: 99.99
 *         description:
 *            type: string
 *            description : description
 *            example : "description"
 *         image:
 *           type: string
 *           description: URL of the product image
 *           example: "http://example.com/image.png"
 */

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please input product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      requred: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
