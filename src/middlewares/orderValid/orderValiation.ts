import { Request, Response, NextFunction } from 'express';

const productValid = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  if (!products) return res.status(400).json({ error: 'Classe is required' });
  if (typeof products[0] !== 'number') {
    return res.status(422).json({ error: 'Products must be an array of numbers' });
  }
  if (products.length === 0) {
    return res.status(422).json({ error: 'Products can\'t be empty' });
  }
  next();
};

export default productValid;