import styles from "./Icons.module.css";

function Icons({ onMenuClick, onSearchClossClick }) {

  return (
    <div className={styles.icons}>
      <a href="#" className={`${styles.icon} ${styles.menuIcon}`} onClick={onMenuClick}>
        <img src="./pictures/menu.png" alt="Menu" />
      </a>
      <a href="#" className={styles.icon}>
        <img src="./pictures/heart.png" alt="Heart" />
      </a>
      <a href="#" className={styles.icon} onClick={onSearchClossClick}>
        <img src="./pictures/search.png" alt="Search" />
      </a>
      <a href="#" className={styles.icon}>
        <img src="./pictures/shopping-bag.png" alt="Cart" />
      </a>
    </div>
  );
}

export default Icons;
