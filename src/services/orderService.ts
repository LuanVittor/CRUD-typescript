import readToken from '../helpers/readtoken';
import Orders from '../interfaces/orderInterface';
import Product from '../interfaces/productInterface';
// import { UserJwt } from '../interfaces/userJwt';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';
import ProducctModel from '../models/product';

class OrderService {
  public orderModel: OrderModel;

  public productModel: ProducctModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProducctModel(connection);
  }

  public async getAllOrders(): Promise<Orders[]> {
    const orders = await this.orderModel.getAllOrders();
    const responseArray = orders.map(async (elem) => {
      if (elem.id) {
        const ordersById: Product[] = await this.productModel.productById(elem.id);
        const products = ordersById.map((product: Product) => product.id);
        return { ...elem, products } as Orders;
      }
      return { ...elem, products: [] } as Orders;
    });
    const result = await Promise.all(responseArray);
    return result;
  }

  public async create({ products }: Orders, token: string): Promise<Orders> {
    const { data: { username } } = readToken(token);
    
    const id = await this.orderModel.getUser(username);
    const insertId: number = await this.orderModel.create(id);
    products.forEach(async (elem: number) => {
      await this.productModel.update(elem, insertId);
    });
    return { userId: id, products };
  }
}

export default OrderService;
