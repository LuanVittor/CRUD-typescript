import express from 'express';
import ProductController from './controllers/productController';
import nameValidation from './middlewares/productValid/nameValid';
import amountValidation from './middlewares/productValid/amountValid';
import UserController from './controllers/userController';
import usernameValid from './middlewares/userValid/usernameValid';
import classValid from './middlewares/userValid/classValid';
import levelValid from './middlewares/userValid/levelValid';
import passwordValid from './middlewares/userValid/passValid';
import OrderController from './controllers/orderController';

const app = express();

app.use(express.json());

const productsController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

app.get('/products', productsController.getAll);
app.post('/products', nameValidation, amountValidation, productsController.createProduct);
app.post('/users', usernameValid, classValid, levelValid, passwordValid, userController.createUser);
app.get('/orders', orderController.getAllOrders);
app.post('/login')

export default app;
