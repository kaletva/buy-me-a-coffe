import styles from '../Styles/SortCategories.module.scss'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortInfo } from '../../../redux/slices/chooseTypeSlice';
import { changeIncrease } from '../../../redux/slices/chooseTypeSlice';
import { useAppDispatch, useAppSelector } from '../../../hook';

function SortCategories() {
    const dispatch = useAppDispatch()

    const selected = useAppSelector(state => state.chooseType.sortInfo)

    // inc/dec sort
    const setIncrease = () => dispatch(changeIncrease(!selected.increase))

    
    const select = (data: { sortType: string; increase: boolean; }) => {
        dispatch(setSortInfo(data))
        //close sort
        setSortSelect(false)
    }


    const selectCategories = [
        { sortType: 'price', increase: true },
        { sortType: 'name', increase: true }
    ]

    //выбор сортировки
    const [sortSelect, setSortSelect] = useState(false);
    return (
        <div className={styles.Sort_select}>
            <p className={styles.Sort_select_openBtn}>
                <button onClick={setIncrease} className={selected.increase ? styles.Sort_select_openBtn_increase : styles.Sort_select_openBtn_descending}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </button>
                Sort by:
                <span onClick={() => setSortSelect(!sortSelect)}>{" " + selected.sortType}</span>
            </p>
            {sortSelect &&
                <div className={styles.Sort_select_controlls}>
                    {selectCategories.map((data, i) => (
                        <p
                            key={i}
                            onClick={() => (select(data))}
                        >
                            {data.sortType}
                        </p>
                    ))}
                </div>
            }
        </div>
    );
}

export default SortCategories;