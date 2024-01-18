import styles from "./MenuDishes.module.css"
import menuDishes from "./MenuDishes.json";
import MenuDish from "./MenuDish";

function MenuDishes() {
    return (
        <>
            <h3 className="sub-heading">our dishes</h3>
            <h1 className="heading">MENU</h1>
            <div className={styles.menuContainer}>
                {menuDishes.map(menuDish => (
                    <MenuDish
                        key={menuDish.id}
                        id={menuDish.id}
                        name={menuDish.name}
                        img={menuDish.img}
                        price={menuDish.price}
                        star={menuDish.star}
                        halfStar={menuDish.halfStar}
                        emptyStar={menuDish.emptyStar}
                    />
                ))
                }
            </div>
        </>
    )
}

export default MenuDishes;