import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/productInterface';

export default class ProducctModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute(query);
    return result as Product[];
  }

  public async createProduct(payload: Product): Promise<Product> {
    const { name, amount } = payload;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...payload };
  }

  public async productById(id: number): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?;';
    const [productArray] = await this.connection.execute<RowDataPacket[]>(query, [id]);

    return productArray as Product[];
  }
}