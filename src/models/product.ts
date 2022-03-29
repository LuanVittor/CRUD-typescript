import { Pool /* ResultSetHeader */ } from 'mysql2/promise';
import Product from '../interfaces/productInterface';

export default class ProducctModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    console.log('anets de query');
    const query = 'SELECT * FROM Trybesmith.Products';
    const [result] = await this.connection.execute(query);
    console.log('dpois dela');
    return result as Product[];
  }

  // public async create(book: Product): Promise<Product> {
  //   const { title, price, author, isbn } = book;
  //   const result = await this.connection.execute<ResultSetHeader>(
  //     'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
  //     [title, price, author, isbn],
  //   );
  //   const [dataInserted] = result;
  //   const { insertId } = dataInserted;
  //   return { id: insertId, ...book };
  // }
}