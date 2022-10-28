import React from "react";
import CartProduct from "./Components/CartProduct";
import Checkout from "./Components/Checkout";
import styles from './index.module.scss'
import { useAppSelector } from "../../hook";



const Cart: React.FC = () => {
    const cartProducts = useAppSelector(d => d.cartSlice.cartData)
    return (
        <div className={styles.Cart}>
            <div className={styles.Cart_row}>
                {cartProducts.length ?
                    cartProducts.map((product, i) =>
                        <CartProduct key={product.id} productData={product} productIndex={i} />
                    ) :
                    <h1>Cart is empty</h1>
                }
            </div>
            <Checkout />

        </div>
    );
}


export default Cart;