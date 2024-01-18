import ButtonOrder from "../../buttons/ButtonOrder";
import styles from "./SlideSpecialDish.module.css";

function SlideSpecialDish({ id, topic, name, description, img }) {
    return (
        <div className={styles.slide}>
            <div className={styles.SpecialDishContent}>
                <span>{topic}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <ButtonOrder name="order now" />
            </div>
            <div className={styles.SpecialDishImage}>
                <img src={img} alt={`special-dish-${id}`} />
            </div>
        </div>
    );
}

export default SlideSpecialDish;