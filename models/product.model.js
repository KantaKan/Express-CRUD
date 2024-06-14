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
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the product
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
 *         image:
 *           type: string
 *           description: URL of the product image
 *           example: "http://example.com/image.png"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the product was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp of when the product was last updated
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
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;