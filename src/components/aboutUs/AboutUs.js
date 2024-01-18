import styles from "./AboutUs.module.css";
import ButtonOrder from "../../buttons/ButtonOrder";
import aboutUsData from "./AboutUs.json"

function AboutUs() {
    return (
        <>
            <h3 class="sub-heading">about us</h3>
            <h1 class="heading">why choose us</h1>

            <div className={styles.aboutUsContainer}>

                <div className={styles.aboutUsImage}>
                    <img src={aboutUsData.imgSrc} alt="about_us" className={styles.img} />
                </div>

                <div className={styles.aboutUsContent}>
                    <h3>{aboutUsData.title}</h3>
                    <p>{aboutUsData.paragraph}</p>
                    <p>{aboutUsData.paragraph}</p>

                    <div className={styles.iconsContainer}>
                        {aboutUsData.icons.map(icon => (
                            <div className={styles.icons} key={icon.id}>
                                <a href="#" className={styles.deliveryIcon}>
                                    <img src={icon.imgSrc} alt="delivery-icon" />
                                </a>
                                <span>{icon.text}</span>
                            </div>
                        ))}
                    </div>
                    <ButtonOrder name="Learn more" />
                </div>
            </div>
        </>
    )
}

export default AboutUs;