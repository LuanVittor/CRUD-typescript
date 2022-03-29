import express from 'express';
import ProductController from './controllers/productController';
import nameValidation from './middlewares/nameValid';
import amountValidation from './middlewares/amountValid';
import usernameValidation from './middlewares/userValid/usernameValid';
import classValidation from './middlewares/userValid/classValid';

const app = express();

app.use(express.json());

const productsController = new ProductController();

app.get('/products', productsController.getAll);
app.post('/products', nameValidation, amountValidation, productsController.createProduct);
app.post('.users', usernameValidation, classValidation)

export default app;
