import { Request, Response } from 'express';
import Login from '../interfaces/loginInterface';
import LoginService from '../services/loginServices';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public getUser = async (req: Request, res: Response) => {
    const { username, password } = req.body as Login;
    const result = await this.loginService.getUser(username);
    console.log(result);
  };
}

export default LoginController;