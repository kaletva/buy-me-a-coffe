import styles from './NotFound.module.scss'
function NotFound() {
    return (
        <div className={styles.NotFound}>
            <div className={styles.NotFound_container}>
                <img src="../../assets/images/mug.png" alt="" />
                <h1>404 | Page not found</h1>
            </div>
        </div>
    );
}

export default NotFound;