import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import Orders from '../interfaces/orderInterface';
// import { UserJwt } from '../interfaces/userJwt';
// import UserJwt from '../interfaces/userJwt';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Orders[]> {
    const query = 'SELECT * FROM Trybesmith.Orders';
    const [result] = await this.connection.execute<RowDataPacket[]>(query);
    return result as Orders[];
  }

  public async create(userId: number): Promise<number> {
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [result] = await this.connection.execute<ResultSetHeader>(query, [userId]);
    return result.insertId;
  }

  public async getUser(username: string): Promise<number> {
    const query = 'SELECT id username FROM Trybesmith.Users WHERE username = ?';
    const [result] = await this.connection.execute<RowDataPacket[]>(query, [username]);
    // result == [{ username: 1 }]
    const id = result[0].username;
    return id as number;
  }
}