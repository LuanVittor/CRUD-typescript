import { Request, Response, NextFunction } from 'express';
import Product from '../interfaces/productInterface';

const amountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body as Product;
  if (!amount) return res.status(400).json({ message: { error: 'Amount is required' } });
  if (typeof amount !== 'string') {
    return res.status(400).json({ message: { error: 'Amount must be a string' } });
  }
  if (amount.length < 3) {
    return res.status(411).json({ message: { error: 'Amount must be longer than 2 characters' } });
  }
  next();
};

export default amountValidation;