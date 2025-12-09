import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers.js';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)
  const location = useLocation();

  if(!totalCartQuantity) return null;

  return (
    <div className="bg-darkbrown-1 p-4 text-base uppercase flex items-center justify-between">
      <p className='font-semibold space-x-4 text-brown-1'>
        <span>{totalCartQuantity} items</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      {location.pathname !== "/cart" && <Link to="/cart">Open cart &rarr;</Link>}
    </div>
  );
}

export default CartOverview;
