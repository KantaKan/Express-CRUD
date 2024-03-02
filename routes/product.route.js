import express from "express"
import { DeleteProduct, GetAllProduct, GetAproduct, PostProduct, UpdateProduct } from "../controller/product.controller.js"
import Product from "../models/product.model.js"

const router = express.Router()


router.get("/", GetAllProduct)
router.get("/:id", GetAproduct)
router.post("/", PostProduct)
router.put("/:id", UpdateProduct)
router.delete("/:id", DeleteProduct)


export default router