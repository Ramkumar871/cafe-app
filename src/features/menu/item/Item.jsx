import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../../utils/helpers";
import Button from "../../../ui/Button";
import { addItem, getCurrentQuantityById } from "../../cart/cartSlice";
import QtyControl from "../../../ui/QtyControl";

function Item() {
  const { name, image, price, description, _id } = useLoaderData();

  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(_id));

  function handleAddToCart() {
    const newItem = {
      itemId: _id,
      name,
      quantity: 1,
      unitPrice: price,
      totalPrice: price * 1
    }

    dispatch(addItem(newItem))
  }

  return (
    <div>
      <div className="bg-brown-2 flex flex-col md:flex-row items-center justify-start xl:space-x-40 md:relative">
        <img src={image} alt={name} className="xl:ms-40 w-[250px] md:w-[350px]"  />
        <div className="flex flex-col sm:gap-3">
          <h2 className="text-darkbrown-1 text-2xl sm:text-4xl font-extrabold">{name}</h2>
          <p className="text-center md:text-start my-2 md:my-0 text-darkbrown-2 text-xl sm:text-2xl font-medium">
            {formatCurrency(price)}
          </p>
        </div>
        {currentQuantity ? <QtyControl itemId={_id} type="menu" /> : <Button type="menuButton" onClick={handleAddToCart}>Add to Cart</Button>}
      </div>

      

      <div className="mx-5 md:ms-10 mt-5 text-darkbrown-1">
        <p className="text-2xl mb-1">Description</p>
        <p className="text-lg italic">{description}</p>
      </div>
    </div>
  );
}

export default Item;
