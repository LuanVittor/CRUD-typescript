import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();
    return res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const token: string | undefined = req.headers.authorization;
    if (token) {
      const order = await this.orderService.create(req.body, token);
      return res.status(201).json({ order });
    }
    return res.status(500).json({ error: 'Internal server error' });
  };
}

export default OrderController;