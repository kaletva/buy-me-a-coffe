import styles from '../Styles/Sort.module.scss'
import ChooseCategories from './ChooseCategories';
import SortCategories from './SortCategories'


function Sort() {
    return (
        <div className={styles.Sort}>
            <ChooseCategories/>
            <SortCategories/>
        </div>
    );
}

export default Sort;