import React from 'react';
import styles from "./Review.module.css";
import calculateStars from "../../utils/utils";

function Review({ id, name, srcImg, review, star, halfStar }) {
    return (
        <div className={styles.cardReview}>
            <div className={styles.review}>
                <a href="#">
                    <img src={srcImg} alt={`user-photo-${id}`} className={styles.img} />
                </a>
                <div>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.stars}>
                        {calculateStars(star, halfStar)}
                    </div>
                </div>
            </div>
            <p>{review}</p>
        </div>
    );
}

export default Review;