import styles from './Styles/Content.module.scss'
import ProductList from './Components/ProductList';
import Sort from './Components/Sort'
import { useState, useEffect } from 'react';
import {useSelector } from 'react-redux';
import axios from 'axios';



function Home() {
    const sortControlls = useSelector(state => state.chooseType.value);
    
    const selectedSortType = useSelector(state => state.chooseType.sortInfo)
    const increase = useSelector(state => state.chooseType.sortInfo.increase)

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        axios.get(`https://6324bb346f7a75f8b7987bc4.mockapi.io/products?${sortControlls > 0 ? `type=${sortControlls}`: "" }&sortBy=${selectedSortType.sortType}&order=${increase ? 'asc' : 'desc'}`)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
    }, [sortControlls, selectedSortType, increase]);


    return (
        <div className={styles.Content}>
            <Sort/>
            <ProductList data={data} loading={loading} />
        </div>
    );
}

export default Home;