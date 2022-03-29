import express from 'express';
import ProductController from './controllers/productController';
import nameValidation from './middlewares/nameValid';
import amountValidation from './middlewares/amountValid';

const app = express();

app.use(express.json());

const productsController = new ProductController();

app.get('/products', productsController.getAll);
app.post('/products', nameValidation, amountValidation, productsController.createProduct);

export default app;
