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
import LoginController from './controllers/loginController';
import validToken from './middlewares/auth';
import productValid from './middlewares/orderValid/orderValiation';

const app = express();

app.use(express.json());

const productsController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const loginController = new LoginController();

app.get('/products', productsController.getAll);
app.post('/products', nameValidation, amountValidation, productsController.createProduct);
app.post('/users', usernameValid, classValid, levelValid, passwordValid, userController.createUser);
app.get('/orders', orderController.getAllOrders);
app.post('/login', usernameValid, passwordValid, loginController.getUser);
app.post('/orders', validToken, productValid);

export default app;
