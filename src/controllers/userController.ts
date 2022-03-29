import { Request, Response } from 'express';
import generateJwt from '../helpers/generateJwt';
import User from '../interfaces/userInterface';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) { }
  
  public createUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;
    const payload: User = { username, classe, level, password };
    await this.userService.createUser(payload);
    const token = generateJwt({ username, password });
    return res.status(201).json({ token });
  }; 
}

export default UserController;