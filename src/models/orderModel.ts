import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import Orders from '../interfaces/orderInterface';

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
}