import styles from "./MenuDish.module.css";
import ButtonOrder from "../../buttons/ButtonOrder";
import calculateStars from "../../utils/utils";;

function MenuDish({ id, name, img, price, star, halfStar, emptyStar }) {
    return (
        <div className={styles.menuDishContainer}>
            <a href="#">
                <img src="./pictures/heart.png" alt="Heart" className={styles.heartLike} />
            </a>
            <a href="#">
                <img src="./pictures/eye.png" alt="Eye" className={styles.eyeIconLink} />
            </a>
            <img src={img} alt={`dish-${id}`} className={styles.img} />
            <h3>{name}</h3>
            <div>
                {calculateStars(star, halfStar, emptyStar)}
            </div>
            <span>${price}</span>
            <ButtonOrder name="Add To Cart" className={styles.button} />
        </div>
    )
}

export default MenuDish;