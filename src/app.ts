import express from 'express';
import ProductController from './controllers/productController';
import nameValidation from './middlewares/productValid/nameValid';
import usernameValidation from './middlewares/userValid/usernameValid';
import classValidation from './middlewares/userValid/classValid';
import amountValidation from './middlewares/productValid/amountValid';
import levelValidation from './middlewares/productValid/levelValid';
import passwordValidation from './middlewares/productValid/passValid';

const app = express();

app.use(express.json());

const productsController = new ProductController();

app.get('/products', productsController.getAll);
app.post('/products', nameValidation, amountValidation, productsController.createProduct);
app.post('.users', usernameValidation, classValidation, levelValidation, passwordValidation,
);

export default app;
