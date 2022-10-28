import styles from '../Styles/ProductList.module.scss'
import Product from './Product';

import { useAppSelector } from '../../../hook';



function ProductList() {
    const data = useAppSelector(state => state.productSlice.productsData)
    const loading = useAppSelector(state => state.productSlice.loadStatus)
    return (
        <div>
            {loading === 'resolved' ?
                <div className={styles.ProductList} >
                    {data.map((item) => <Product key={item.id} product={item} />)}
                </div> :
                <div className={styles.loading}>
                    <h1>{loading}</h1>
                </div>
            }

        </div>
    );
}

export default ProductList;