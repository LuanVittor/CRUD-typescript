import { Request, Response, NextFunction } from 'express';
import User from '../../interfaces/userInterface';

const levelValid = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body as User;
  if (!level && level !== 0) return res.status(400).json({ error: 'Level is required' });
  if (typeof level !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' });
  }
  if (level < 1) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }
  next();
};

export default levelValid;