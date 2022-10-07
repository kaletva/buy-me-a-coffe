import styles from '../Styles/Checkout.module.scss'
function Checkout() {
    return ( 
        <div className={styles.Checkout}>
            <div className={styles.Checkout_totalInfo}>
                <h1>Total</h1>
                <h2>100 Rub</h2>
            </div>
            <div className={styles.Checkout_icons}></div>
            <div className={styles.Checkout_payInfo}>
                <button>Checkout</button>
            </div>
        </div>
     );
}

export default Checkout;