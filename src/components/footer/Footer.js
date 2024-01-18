import styles from "./footer.module.css";

function Footer() {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.locations}>
                    <h3>Locations</h3>
                    <a href="#">Russia</a>
                    <a href="#">UK</a>
                    <a href="#">India</a>
                    <a href="#">France</a>
                    <a href="#">Italy</a>
                </div>
                <div className={styles.qiuckLinks}>
                    <h3>Quick Links</h3>
                    <a href="#home">Home</a>
                    <a href="#dishes">Dishes</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#review">Review</a>
                    <a href="#order">Order</a>
                </div>
                <div className={styles.contactInfo}>
                    <h3>Contact Info</h3>
                    <a href="#">+123-456-7890</a>
                    <a href="#">+11-222-3333</a>
                    <a href="#">dilicfood.com</a>
                </div>
                <div className={styles.followUs}>
                    <h3>Follow Us</h3>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Meta</a>
                    <a href="#">Linkdin</a>
                </div>
            </div>
            <h2>Copyright @2024 Delicious Food Inc</h2>
        </>
    )
}

export default Footer;