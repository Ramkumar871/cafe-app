import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";

function CreateOrder() {
  const cart = useSelector(getCart)
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const {username, status: addressStatus, position, address, error: errorAddress} = useSelector(state => state.user)
  const isLoadingAddress = addressStatus === 'loading' 

  if(!cart.length) return <EmptyCart />

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      {/* There is no need to specify action like above because the default action is the current route */}
      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Full Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={username} required />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && <p className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded-md">{formErrors.phone}</p>}
          </div>
          
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === "error" && <p className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded-md">{errorAddress}</p>} 
          </div>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.longitude && position.latitude ? `${position.latitude}, ${position.longitude}` : ''} />
          <Button
            disabled={isSubmitting || isLoadingAddress}
            className="bg-darkbrown-1 hover:bg-darkbrown-2 focus:ring-darkbrown-2 focus:bg-darkbrown-2 inline-block cursor-pointer rounded-full px-4 py-3 text-base font-semibold tracking-wide uppercase transition-colors duration-300 focus:ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Placing Order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
