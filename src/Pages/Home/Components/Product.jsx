import styles from '../Styles/Product.module.scss'
import { useState } from 'react';
function Product({ product }) {

    const [chooseSIze, setChooseSIze] = useState(0);
    const chooseP = ((i) => {
        setChooseSIze(i)
    })
    const coffeePrice = ['90', '150', '210', '270']
    return (
        <div className={styles.Product}>
            <div className={styles.Product_image}>
                <img src={product.img} alt="" />
            </div>
            <div className={styles.Product_name}>
                <h1>{product.name}</h1>
            </div>
            <div className={styles.Product_price}>
                <h2>{product.type === 1 ? coffeePrice[chooseSIze] : product.price} Rub.</h2>
            </div>
            <div className={styles.Product_buttonGroup}>
                {
                    product.params.map((p, i) => (
                        <button key={i} onClick={() => chooseP(i)} className={chooseSIze === i ? styles.Product_buttonGroup_btnActive : ""}>{p}</button>
                    ))
                }
            </div>
            <div className={styles.Product_buyButton}>
                <button className='coffe-btn' >Buy</button>
            </div>
        </div>
    );
}

export default Product;
