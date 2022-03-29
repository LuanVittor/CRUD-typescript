import { Pool, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/loginInterface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUser(id: number): Promise<Login[]> {
    const query = 'SELECT username, password FROM Trybesmith.Users';
    const [result] = await this.connection.execute<RowDataPacket[]>(query, [id]);
    return result as Login[];
  }
}