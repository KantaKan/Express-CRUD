import Product from "../models/product.model.js";

export const GetAllProduct = async (req, res) => {
    console.log(req.params);
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    } }


export const GetProduct  = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

export const PostProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

export const UpdateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      if (!product) {
        return res.status(404).json({ message: " product not found " });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

export const DeleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: " product not found" });
      }
      res.status(200).json({ message: " product has been deleted " });
    } catch (error) {
      res.status(500).json(error);
    }
  }

