import Login from '../interfaces/loginInterface';
import connection from '../models/connection';
import LoginModel from '../models/loginModel';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getUser(username: string): Promise<Login[]> {
    const user = await this.model.getUser(username);
    return user;
  }
}

export default LoginService;