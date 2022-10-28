import styles from '../Styles/CartProduct.module.scss'
import { decrementProductCount, deleteProduct, incrementProductCount } from '../../../redux/slices/cartSlice';
import { useAppDispatch } from '../../../hook';


interface CartProductProps {
    productIndex: number
    productData:{
        name: string, 
        param: string,
        count: number,
        id: string,
        totalPrice: number,
    }
}

const CartProduct: React.FC<CartProductProps> =({productData, productIndex})  =>{
    const dispatch = useAppDispatch()
    
    const deleteEl = () => {
        dispatch(deleteProduct(productIndex))
    }
   
    return ( 
        <div className={styles.CartProduct}>
            <div>
                <h2><span>{productIndex + 1 + " "}</span>{productData.name}</h2>
            </div>
            <div>
                <p>{productData.param}</p>
            </div>
            <div className={styles.CartProduct_numberButtons}>
                {
                    productData.count > 1 ? <button onClick={() => dispatch(decrementProductCount(productData.id))}>-</button> : <button>-</button>
                }
                <p>{productData.count}</p>
                <button onClick={() => dispatch(incrementProductCount(productData.id))}>+</button>
            </div>
            <div>
                <p>{productData.totalPrice} р.</p>
            </div>
            <div>
                <button onClick={() => deleteEl()}>Delete</button>
            </div>
        </div>
     );
}

export default CartProduct;