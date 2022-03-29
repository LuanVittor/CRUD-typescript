import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import JwtInterface from '../interfaces/jwtInterface';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) { }
  
  public createUser = async (req: Request, res: Response) => {
    const JWT_SECRET = 'SenhaSegura456!';
    const { username, classe, level, password } = req.body;
    const jwtConfig: JwtInterface = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const payload = { username, classe, level, password };
    await this.userService.createUser(payload);
    const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  }; 
}

export default UserController;