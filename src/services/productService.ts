import connection from '../models/connection';
import Product from '../interfaces/productInterface';
import ProducctModel from '../models/product';

class ProductService {
  public model: ProducctModel;

  constructor() {
    this.model = new ProducctModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async createProduct(payload: Product): Promise<Product> {
    const product = await this.model.createProduct(payload);
    return product;
  }
}

export default ProductService;