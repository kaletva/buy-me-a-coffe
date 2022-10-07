import { useDispatch, useSelector } from 'react-redux';
import styles from '../Styles/ChooseCategories.module.scss'
import { incrementByAmount } from '../../../redux/slices/chooseTypeSlice';
function ChooseCategories() {
    const categories = useSelector(state => state.chooseType.categories)
    const sortControlls = useSelector(state => state.chooseType.value);
    const dispatch = useDispatch()
    const changeSortControlls  = (i) => {
        dispatch(incrementByAmount(i))
    }
    return (
        <div className={styles.Sort_controlls}>
            {categories.map((name, i) => (
                <li
                    key={i}
                    onClick={() => changeSortControlls(i)}
                    className={sortControlls === i ? styles.Sort_controlls_active : styles.Sort_controlls_notActive}
                >
                    {name}
                </li>
            ))}
        </div>
    );
}

export default ChooseCategories;