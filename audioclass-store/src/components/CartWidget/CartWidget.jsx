import './cartWidget.css';
import cartIcon from './cart-icon.png';
const CartWidget = () => {
    return (
        <div className="product-cart">
            <img src={cartIcon} alt="productCart" className="product-cart-icon"/>
        </div>
    );
}

export default CartWidget;
