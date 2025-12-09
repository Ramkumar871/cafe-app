import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers'
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import QtyControl from '../../ui/QtyControl';

function CartItem({ item }) {
  const { itemId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className='font-bold'>{formatCurrency(totalPrice)}</p>
        <QtyControl itemId={itemId} type="cart" />
        <Button type="small" onClick={() => dispatch(deleteItem(itemId))}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
