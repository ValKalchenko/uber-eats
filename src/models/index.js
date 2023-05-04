// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "PENDING": "PENDING",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "DECLINED": "DECLINED"
};

const { OrderDish, Order, User, Dish, Restaurant } = initSchema(schema);

export {
  OrderDish,
  Order,
  User,
  Dish,
  Restaurant,
  OrderStatus
};