import { useDispatch } from "react-redux";
import './ProductCard.css';
import { addToCart } from "../store/action/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="ingredient">
      <div className="ingredient__image">
        <figure>
          <img src={product.img} alt={product.title} />
        </figure>
      </div>
      <div className="ingredient__title">
        <h3>{product.title}</h3>
      </div>
      <div className="ingredient__footer">
      <div className="price">৳ {product.price}</div>
      <button
        onClick={() => {
          alert(`Your Item added Cart`);
          // dispatch({ type: 'cart/addToCart', payload: product });
          dispatch(addToCart(product))
        }}
        className="btn-add-to-cart"
      >
        ADD TO CART
      </button>
    </div>

    </div>
  );
};

export default ProductCard;
