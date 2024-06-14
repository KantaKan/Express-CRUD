import express from "express";
import mongoose from "mongoose";
import RouteProduct from "./routes/product.route.js";
import dotenv from "dotenv"
import "dotenv/config";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
import Product from "./models/product.model.js";
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product API",
      version: "1.0.0",
      description: "API for managing products",
      contact: {
        name: "Developer",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local server",
        },
      ],
    },
  },
  apis: ["./routes/*.js", "./models/*.js"], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

app.use("/api/product", RouteProduct);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error.message);
  });
