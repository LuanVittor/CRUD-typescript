import { Request, Response, NextFunction } from 'express';
import User from '../../interfaces/userInterface';

const usernameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body as User;
  if (!username) return res.status(400).json({ error: 'Username is required' });
  if (typeof username !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  }
  if (username.length < 3) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }
  next();
};

export default usernameValidation;