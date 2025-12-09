import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <>
    <LinkButton to="/menu" utilityClasses="px-6 mt-10">&larr; Back to menu</LinkButton>

    <div className="px-4 py-3 flex flex-col items-center">
      <img src="https://res.cloudinary.com/dmgrue5xh/image/upload/v1760890939/Crownglory%20Bakes%20and%20Cafe/Brand/cart_h7kw9y.png" alt="Empty cart" className="w-40 md:w-50" />

      <p className='font-semibold mt-7'>Your cart is still empty. Start adding some items from our menu :)</p>
    </div>
    </>
  );
}

export default EmptyCart;
