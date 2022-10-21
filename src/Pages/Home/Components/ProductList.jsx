import styles from '../Styles/ProductList.module.scss'
import Product from './Product';
import { useSelector } from 'react-redux';


function ProductList() {
    const data = useSelector(state => state.productSlice.productsData)
    const loading = useSelector(state => state.productSlice.loadStatus)
    // const err = useSelector(state => state.productSlice.error)
    return (
        <>
            {loading === 'resolved' ?
                <div className={styles.ProductList}>
                    {data.map((item) => <Product key={item.id} product={item} />)}
                </div> :
                <div className={styles.loading}>
                    <h1>{loading}</h1>
                </div>
            }

        </>
    );
}

export default ProductList;