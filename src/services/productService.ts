import connection from '../models/connection';
import Product from '../interfaces/productInterface';
import ProducctModel from '../models/product';

class ProductService {
  public model: ProducctModel;

  constructor() {
    this.model = new ProducctModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    console.log('service');
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;