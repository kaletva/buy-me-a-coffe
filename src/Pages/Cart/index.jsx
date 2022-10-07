import CartProduct from "./Components/CartProduct";
import Checkout from "./Components/Checkout";
import styles from './index.module.scss'

function Cart() {
    return (
        <div className={styles.Cart}>
            <div className={styles.Cart_row}>
                <CartProduct />
                <CartProduct />
            </div>
            <Checkout />

        </div>
    );
}

export default Cart;