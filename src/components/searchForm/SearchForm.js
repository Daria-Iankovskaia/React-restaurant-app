import styles from "./searchform.module.css";
import closeIcon from '../../images/cross.png';
import searchIcon from '../../images/search.png';

function SearchForm({ isSearchFormVisible, onSearchClossClick }) {
    const formClasses = isSearchFormVisible ? `${styles.active}` : `${styles.hidden}`;

    return (
        <form className={formClasses}>
            <input type="search" name="" placeholder="search here..." className={styles.searchBox} />
            <label htmlFor="searchBox" className={styles.searchIcon}></label>
            <i className={styles.closeIcon} style={{ backgroundImage: `url(${closeIcon})` }} onClick={onSearchClossClick}></i>
            <i className={styles.searchIcon} style={{ backgroundImage: `url(${searchIcon})` }}></i>
        </form>
    );
}

export default SearchForm;