import styles from "./ButtonOrder.module.css";

function ButtonOrder({ name }) {
    return (
        <a href="#" className={styles.btn}>{name}</a>
    )
}

export default ButtonOrder;