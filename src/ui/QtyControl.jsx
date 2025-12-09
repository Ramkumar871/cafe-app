import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQty, getCurrentQuantityById, increaseItemQty } from "../features/cart/cartSlice";
import Button from "./Button";

function QtyControl({itemId, type}) {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentQuantityById(itemId));

    const styles = {
        menu: 'md:absolute left-7/10 top-3/4 flex gap-2 items-center md:gap-3 mb-3 md:my-0 mt-2',
        cart: 'flex gap-2 items-center md:gap-3',
    }

    return (
        <div className={styles[type]}>
            <Button type="round" onClick={() => dispatch(decreaseItemQty(itemId))}>-</Button>
            <span className={type === "cart" ? "text-sm font-medium" : "text-xl text-darkbrown-2 font-medium"}>{currentQuantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQty(itemId))}>+</Button>
        </div>
    )
}

export default QtyControl
