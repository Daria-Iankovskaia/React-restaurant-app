import styles from "./CustomerReviews.module.css";
import reviews from "./reviews.json";
import Review from "./Review";

function CustomerReviews() {
    return (
        <>
            <h3 className="sub-heading">Customer's Reviews</h3>
            <h1 className="heading">what they say</h1>

            <div className={styles.reviewsContainer}>
                {reviews.map(rev => (
                    <Review
                        key={rev.id}
                        id={rev.id}
                        name={rev.name}
                        srcImg={rev.srcImg}
                        review={rev.review}
                        star={rev.star}
                        halfStar={rev.halfStar}
                    />
                ))}
            </div>
        </>
    )
}

export default CustomerReviews;