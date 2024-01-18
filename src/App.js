import Header from "./components/header/Header";
import SpecialDishes from "./components/specialDishes/SpecialDishes";
import MenuDishes from "./components/menuDishes/MenuDishes";
import AboutUs from "./components/aboutUs/AboutUs";
import CustomerReviews from "./components/customerReviews/CustomerReviews";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <div id="home"></div>
      <Header />
      <div>
        <section id="dishes" className="section">
          <SpecialDishes />
        </section>
        <section id="menu" className="section">
          <MenuDishes />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="reviews" className="section">
          <CustomerReviews />
        </section>
      </div>
      <Footer />
    </div>
  );
}


export default App;

