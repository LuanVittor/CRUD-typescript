import ProductController from './controllers/productController';
import app from './app';

const PORT = 3000;

const productsController = new ProductController();

app.get('/produts', productsController.getAll);

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
