import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };
}

export default ProductController;