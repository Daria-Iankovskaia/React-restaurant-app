import styles from "./NavBar.module.css";

function Navbar({ isVisible }) {

    return (
        <nav className={`${styles.navbar} ${isVisible ? styles.active : styles.hidden}`}>
            <a className={styles.active} href="#home">home</a>
            <a href="#dishes">dishes</a>
            <a href="#menu">menu</a>
            <a href="#about">about</a>
            <a href="#reviews">reviews</a>
        </nav>
)
}

export default Navbar;