import styles from '../Styles/CartProduct.module.scss'
import { useState } from 'react';
function CartProduct() {
    // const dipatch = useDispatch()
    // const count = useSelector(state => state.counterSlice.value)
    const [count, setCount] = useState(1);
    return ( 
        <div className={styles.CartProduct}>
            <div className={styles.CartProduct_product}>
                <h2><span>1.</span>Latte</h2>
            </div>
            <div className={styles.CartProduct_numberButtons}>
                {
                    count > 1 ? <button onClick={() => setCount(count - 1)}>-</button> : <button>-</button>
                }
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className={styles.CartProduct_price}>
                <p>100 rub</p>
            </div>
            <div className={styles.CartProduct_deleteButton}>
                <button>Delete</button>
            </div>
        </div>
     );
}

export default CartProduct;