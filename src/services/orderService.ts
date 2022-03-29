import Orders from '../interfaces/orderInterface';
import Product from '../interfaces/productInterface';
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

  public async create({ products }: Order, token: string): Promise<OrderResponse> {
    const { id }: JwtUser = decodeToken(token);
    const insertId: number = await this.orderModel.create(id);
    products.forEach(async (product: number) => {
      await this.productModel.update(product, insertId);
    });
    return { order: {
      userId: id,
      products,
    } };
  }
}

export default OrderService;
