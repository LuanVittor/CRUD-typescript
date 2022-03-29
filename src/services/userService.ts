import User from '../interfaces/userInterface';
import connection from '../models/connection';
import UserModel from '../models/userModel';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(payload: User): Promise<void> {
    await this.model.createUser(payload);
  }
}

export default UserService;