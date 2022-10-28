import styles from '../Styles/Checkout.module.scss'
import { useState } from 'react';
import { useAppSelector } from '../../../hook';

function Checkout() {
    const total = useAppSelector(d => d.cartSlice.cartData.reduce((t, price) => {
        return t + +price.totalPrice
    }, 0))
    const [hoverBtn, setHoverBtn] = useState(false)
    return ( 
        <div className={styles.Checkout}>
            <div>
                <h1>Total</h1>
                <h2>{total} Rub</h2>
            </div>
            <div></div>
            <div className={styles.Checkout_payInfo}>
                <button onMouseEnter={()=> setHoverBtn(true)} onMouseLeave={() => setHoverBtn(false)}>
                    {hoverBtn ? 'soon' : "checkout"}
                </button>
            </div>
        </div>
     );
}

export default Checkout;