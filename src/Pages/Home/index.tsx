import styles from './Styles/Content.module.scss'
import ProductList from './Components/ProductList';
import Sort from './Components/Sort'
import {useEffect } from 'react';
import { fetchProductsData } from '../../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../../hook';



function Home() {
    const dispatch = useAppDispatch()
    const sortControlls = useAppSelector(state => state.chooseType.value);
    
    const selectedSortType = useAppSelector(state => state.chooseType.sortInfo.sortType)
    const increase = useAppSelector(state => state.chooseType.sortInfo.increase)

    useEffect(() => {
        dispatch(fetchProductsData({sortControlls, selectedSortType, increase}))
    }, [sortControlls, selectedSortType, increase]);


    return (
        <div className={styles.content}>
            <Sort/>
            <ProductList />
        </div>
    );
}

export default Home;