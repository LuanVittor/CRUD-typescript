import { Request, Response } from 'express';
import ProducctModel from '../models/product';

class ProductController {
  constructor(private productModel = new ProducctModel()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productModel.getAll();
    res.status(200).json(products);
  };
}

export default ProductController;