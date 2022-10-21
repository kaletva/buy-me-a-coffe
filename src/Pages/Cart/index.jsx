import { useSelector } from "react-redux";
import CartProduct from "./Components/CartProduct";
import Checkout from "./Components/Checkout";
import styles from './index.module.scss'

function Cart() {
    const cartData = useSelector(d => d.cartSlice.cartData)
    return (
        <div className={styles.Cart}>
            <div className={styles.Cart_row}>
                {cartData.length ?
                    cartData.map(product =>
                        <CartProduct key={product.id} productData={product} productIndex={cartData.indexOf(product)} />
                    ) :
                    <h1>Cart is empty</h1>
                }
            </div>
            <Checkout />

        </div>
    );
}

export default Cart;