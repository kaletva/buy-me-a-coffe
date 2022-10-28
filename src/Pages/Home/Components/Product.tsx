import styles from '../Styles/Product.module.scss'
import { SetStateAction, useState } from 'react';
import { addProductToCart } from '../../../redux/slices/cartSlice';
import { motion, useIsPresent } from 'framer-motion';
import { useAppDispatch } from '../../../hook';


interface ProductPropsI {
    product: {
        id: number,
        name: string,
        img: string,
        price: number,
        type: number,
        params: string[]
    }
}

const Product: React.FC<ProductPropsI> = ({ product }) => {
    const dispatch = useAppDispatch()
    const [chooseSIze, setChooseSIze] = useState(0);
    const chooseP = ((i: SetStateAction<number>) => {
        setChooseSIze(i)
    })
    const coffeePrice = ['90', '150', '210', '270']
    const addToCart = () => {
        dispatch(addProductToCart({
            name: product.name,
            param: product.params[chooseSIze],
            totalPrice: product.type === 1 ? +coffeePrice[chooseSIze] : product.price,
            count: 1,
            id: product.id + "-" + product.type + "-" + chooseSIze,
            price: product.type === 1 ? +coffeePrice[chooseSIze] : product.price
        }))
    }


    const isPresent = useIsPresent()

    const variants = {
        closed: {
            opacity: 0
        },
        resolved: {
            opacity: 1
        }
    }
    return (
        <motion.div className={styles.Product} variants={variants} animate={isPresent ? "resolved" : "closed"} >
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
            <div >
                <button onClick={() => addToCart()} className='coffe-btn' >Buy</button>
            </div>
        </motion.div>
    );
}

export default Product;
