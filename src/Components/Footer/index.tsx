import styles from '../Footer/Footer.module.scss'

function Footer() {
    return (
        <footer>
            <div className={styles.footerDiv}>
                <li>
                    <a href="">My website</a>
                </li>
                <li>
                    <a href="">Telegram</a>
                </li>
                <li>
                    <a href="">LinkedIn</a>
                </li>
                <li>
                    <a href="">Github</a>
                </li>
            </div>
        </footer>
    );
}

export default Footer;