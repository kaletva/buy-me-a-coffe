import styles from './Styles/Content.module.scss'
import ProductList from './Components/ProductList';
import Sort from './Components/Sort'
import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../../redux/slices/productSlice';



function Home() {
    const dispatch = useDispatch()
    const sortControlls = useSelector(state => state.chooseType.value);
    
    const selectedSortType = useSelector(state => state.chooseType.sortInfo)
    const increase = useSelector(state => state.chooseType.sortInfo.increase)

    // console.log(useSelector(state => state.cartSlice.cartData))

    useEffect(() => {
        dispatch(fetchProductsData({sortControlls, selectedSortType, increase}))
    }, [sortControlls, selectedSortType, increase]);


    return (
        <div className={styles.Content}>
            <Sort/>
            <ProductList />
        </div>
    );
}

export default Home;