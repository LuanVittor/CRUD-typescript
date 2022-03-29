// import ProductController from './controllers/productController';
import app from './app';
// import nameValidation from './middlewares/nameValid';
// import amountValidation from './middlewares/amountValid';

const PORT = 3000;

// const productsController = new ProductController();

// app.get('/products', productsController.getAll);
// app.post('/products', nameValidation, amountValidation, productsController.createProduct);

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
