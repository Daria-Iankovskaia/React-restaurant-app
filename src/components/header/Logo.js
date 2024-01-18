import styles from './Logo.module.css';

function Logo() {
    return (
        <a href="#home" className={styles.restoIconLink}>
            <img src="./pictures/restaurant.png" alt="Logo" />
        </a>
    );
}

export default Logo;