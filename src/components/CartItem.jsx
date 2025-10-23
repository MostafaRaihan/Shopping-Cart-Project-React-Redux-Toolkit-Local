import { useState } from "react";
import { useDispatch } from "react-redux";
import { modifyQuantityOfAnItem, removeProductFromCart } from "../store/action/cart";

const CartItem = ({ item }) => {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td>
          <div className="product">
            <img src={item.img} alt={item.title} className="product-img" />
          </div>
        </td>
        <td>
          <p>{item.title}</p>
        </td>
        <td>
          <p>৳ {item.price}</p>
        </td>
        <td>
          <div className="qty-input">
            <button
              className="qty-count qty-count--minus"
              data-action='minus'
              type="button"
              onClick={() => {
                if (itemQuantity <= 1) {
                    return alert("Quantity cannot be less than 1");
                }
                setItemQuantity(itemQuantity - 1)
                // dispatch ({type: "cart/modifyQuantityOfAnItem", payload:{id: item.id, quantity:itemQuantity - 1}})
                dispatch(
                  modifyQuantityOfAnItem({
                    id: item.id,
                    quantity : itemQuantity - 1 ,
                  }),
                )
              }}
            >
              <figure> ➖ </figure>
            </button>
            <input 
              className="product-qty"
              name="product-qty"
              value={itemQuantity}
              min="1"
              type="number" 
              onChange={(event) => {
              const newQuantity = Number(event.target.value);
              if (isNaN(newQuantity) || newQuantity < 1) return;
              setItemQuantity(newQuantity);
              // dispatch({
              //   type: "cart/modifyQuantityOfAnItem",
              //   payload: { id: item.id, quantity: newQuantity },
              // });
              dispatch(modifyQuantityOfAnItem({
                id:item.id,
                quantity: newQuantity,
              }))
            }}
            />
            <button
              className="qty-count qty-count--add"
              data-action="add"
              type="button"
              onClick={() => {
                setItemQuantity(itemQuantity + 1)
                // dispatch ({type: "cart/modifyQuantityOfAnItem", payload:{id: item.id, quantity:itemQuantity + 1}})
                dispatch(
                  modifyQuantityOfAnItem({
                    id:item.id,
                    quantity: itemQuantity + 1
                  })
                )
              }}
            >
              <figure> ➕ </figure>
            </button>
          </div>
        </td>
        <td>
          <p>৳ {(item.price * itemQuantity).toFixed(2)}</p>
        </td>
        <td>
          <button
            onClick={() => 
              // dispatch ({type: "cart/removeProductFromCart", payload: item.id})
              dispatch(removeProductFromCart(item.id))
            }
            className="cross-icon"
          > 
            ❌
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
