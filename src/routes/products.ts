import express from 'express';
import { adminOnly } from '../middlewares/auth.js';
import { deleteProduct, getAdminProducts, getAllCategories, getLatestProducts, getSingleProduct, newProduct, searchAllProducts, updateProduct } from '../controllers/product.js';
import { singleUpload } from '../middlewares/multer.js';

const app = express.Router();

//Create New Product  - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);

//to get all Products with filters  - /api/v1/product/latest
app.get("/searchproducts", searchAllProducts);

//to get last 5 Products  - /api/v1/product/latest
app.get("/latest", getLatestProducts);

//to get all unique categories  - /api/v1/product/categories
app.get("/categories", getAllCategories);

//to get all Products  - /api/v1/product/new
app.get("/admin-products", adminOnly, getAdminProducts);

app.route("/:id").get(getSingleProduct).put(adminOnly, singleUpload, updateProduct).delete(adminOnly, deleteProduct);

export default app;