import styles from '../Styles/Product.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../redux/slices/cartSlice';
function Product({ product }) {
    const dispatch = useDispatch()
    const [chooseSIze, setChooseSIze] = useState(0);
    const chooseP = ((i) => {
        setChooseSIze(i)
    })
    const coffeePrice = ['90', '150', '210', '270']
    const addToCart = () => {
        dispatch(addProductToCart({
            name: product.name, 
            param: product.params[chooseSIze], 
            totalPrice: product.type === 1 ?  +coffeePrice[chooseSIze] : product.price,
            count: 1, 
            id: product.id + "-" + product.type + "-" + chooseSIze,
            price: product.type === 1 ?  +coffeePrice[chooseSIze] : product.price
        }))
    }

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
                <button onClick={() => addToCart()} className='coffe-btn' >Buy</button>
            </div>
        </div>
    );
}

export default Product;
