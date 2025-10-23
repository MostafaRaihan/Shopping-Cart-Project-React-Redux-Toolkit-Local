import { useSelector, useDispatch } from 'react-redux';
import CartItem from "../components/CartItem";
import './CSS/Cart.css';
import { clearCart } from '../store/action/cart';

const Cart = () => {
  const cart = useSelector((storeState) => storeState.cart);
  const dispatch = useDispatch();

  let totalPrice = 0;
  cart.forEach((item) => (totalPrice += item.price * item.quantity));

  return (
    <div className="account-setting__content">
      <div className="product-table-container">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h2 className="total-price">Total Price: ৳ {totalPrice}</h2>

      <div className="mt-50">
        <button
          onClick={() =>
              // dispatch({ type: "cart/clearCart" })
              dispatch(clearCart())
            } 
          type="button"
          className="btn-big"
          disabled={cart.length === 0}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
