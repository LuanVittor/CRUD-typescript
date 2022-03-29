import { Request, Response } from 'express';
import Product from '../interfaces/productInterface';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  public createProduct = async (req: Request, res: Response) => {
    const { name, amount } = req.body as Product;
    const payload = { name, amount };
    const created = await this.productService.createProduct(payload);
    return res.status(201).json(created);
  };
}

export default ProductController;