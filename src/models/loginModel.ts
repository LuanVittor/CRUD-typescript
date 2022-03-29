import { Pool, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/loginInterface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUser(username: string): Promise<Login[]> {
    const query = 'SELECT username, password FROM Trybesmith.Users WHERE username = ?';
    const [result] = await this.connection.execute<RowDataPacket[]>(query, [username]);
    return result as Login[];
  }
}