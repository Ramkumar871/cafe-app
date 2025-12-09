import {redirect} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import store  from "../../store";
import { clearCart } from "../cart/cartSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
 );

export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const cart = JSON.parse(data.cart);
  const orderPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0)
  //A random time between 30-100 mins to delivery
  const deliveryTime = Date.now() + ((Math.floor(Math.random() * 100 - 30 + 1) + 30) * 60 * 1000);

  const order = {
    ...data,
    cart,
    orderPrice,
    estimatedDelivery: new Date(deliveryTime).toISOString()
  };

  const errors = {};

  if(!isValidPhone(order.phone)) errors.phone = 'Please enter a valid phone number';

  if(Object.keys(errors).length > 0) return errors

  const newOrder = await createOrder(order);

  store.dispatch(clearCart())

  return redirect(`/order/${newOrder._id}`);
}