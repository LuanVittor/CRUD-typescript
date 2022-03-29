import { Pool, RowDataPacket } from 'mysql2/promise';
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
}