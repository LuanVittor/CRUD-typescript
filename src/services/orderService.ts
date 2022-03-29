import Orders from '../interfaces/orderInterface';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<Orders[]> {
    const orders = await this.model.getAllOrders();
    return orders;
  }
}

export default OrderService;
