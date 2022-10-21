import styles from '../Header/Header.module.scss'
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const location = useLocation()
    const cartValue = useSelector(v => v.cartSlice.cartData)
    const productCount = cartValue.reduce((count, data) => {
        return count + data.count
    }, 0)
    const totalPrice = cartValue.reduce((count, data) => {
        return count + data.totalPrice
    }, 0)
    // console.log(window.location.pathname);
    console.log(location.pathname)
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
                {location.pathname === "/Cart" ?
                    <NavLink to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </NavLink>
                    :
                    <NavLink to="/Cart">Cart | {productCount} | {totalPrice} </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;