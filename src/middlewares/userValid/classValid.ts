import { Request, Response, NextFunction } from 'express';
import User from '../../interfaces/userInterface';

const classValid = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body as User;
  if (!classe) return res.status(400).json({ error: 'Classe is required' });
  if (typeof classe !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }
  if (classe.length < 3) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }
  next();
};

export default classValid;