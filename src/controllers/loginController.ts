import { Request, Response } from 'express';
import generateJwt from '../helpers/generateJwt';
import Login from '../interfaces/loginInterface';
import LoginService from '../services/loginServices';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public getUser = async (req: Request, res: Response) => {
    const { username, password } = req.body as Login;
    const result = await this.loginService.getUser(username);
    if (!result.length || password !== result[0].password) {
      return res.status(401).json({ error: 'Username or password invalid' });
    } 
    const token = generateJwt({ username, password });
    return res.status(201).json({ token });
  };
}

export default LoginController;