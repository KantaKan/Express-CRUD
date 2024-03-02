import express from "express";
import mongoose from "mongoose";
import RouteProduct from "./routes/product.route.js"
const app = express();
import Product from "./models/product.model.js";

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.listen(3000, () => {
  console.log("server is running on port 3000");
});


app.use("/api/product", RouteProduct)
// app.get("/", (req, res) => {
//   res.send("hello from a");
// });

// app.get("/api/product", async (req, res) => {
//   console.log(req.params);
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.post("/api/product", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);
//     if (!product) {
//       return res.status(404).json({ message: " product not found " });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.delete("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);
//     if (!product) {
//       return res.status(404).json({ message: " product not found" });
//     }
//     res.status(200).json({ message: " product has been deleted " });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

mongoose
  .connect(
    "mongodb+srv://admin:1150@backendw.q7wsrf3.mongodb.net/Backendw?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection failed");
  });
