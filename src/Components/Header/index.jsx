import styles from '../Header/Header.module.scss'
import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <header>
            <div className={styles.projectName}>
                <NavLink to="/">Buy me a coffee</NavLink>
            </div>
            <div className={styles.actionBtns}>
                <select>
                    <option value="En">En</option>
                    <option value="Ru">Ru</option>
                </select>
                <NavLink to="/Cart">Cart</NavLink> 

            </div>
        </header>
    );
}

export default Header;