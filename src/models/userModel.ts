import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUser(payload: User): Promise<void> {
    const { username, classe, level, password } = payload;
    const values = [username, classe, level, password];
    const query = `INSERT INTO Trybesmith.Users
    (username, classe, level, password)
    VALUES (?, ?, ?, ?)`; 
    await this.connection.execute<ResultSetHeader>(query, values);
  }
}