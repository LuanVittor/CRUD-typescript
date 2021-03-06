import { Request, Response, NextFunction } from 'express';
import User from '../../interfaces/userInterface';

const passwordValid = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body as User;
  if (!password) return res.status(400).json({ error: 'Password is required' });
  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }
  if (password.length <= 8) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }
  next();
};

export default passwordValid;