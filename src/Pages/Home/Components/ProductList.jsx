import styles from '../Styles/ProductList.module.scss'
import Product from './Product';


function ProductList({data, loading}) {
    return (
        <>
            {!loading ?
                <div className={styles.ProductList}>
                    {data.map((item) => <Product key={item.id} product={item} />)}
                </div> :
                <div className={styles.loading}>
                    <h1>loading</h1>
                </div>
            }

        </>
    );
}

export default ProductList;