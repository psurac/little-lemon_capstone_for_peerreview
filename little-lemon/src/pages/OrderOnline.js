import menuCategoryProducer from "../utility/menuCategoryProducer";
import { useMenu } from "../context/MenuContext";
import Dish from "../components/Dish";
import './OrderOnline.css';

function OrderOnline() {
    const { dishes } = useMenu();
    const menuCategory = menuCategoryProducer(dishes);

    const slidToSection = (e, category) => {
        e.preventDefault();
        const categorySection = document.getElementById(`${category}-section`);
        if (categorySection) {
            categorySection.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        };
    };

    return (
        <div className="orderonline-container">
            <div className="nav-order-online cardtitle">
                {menuCategory.map((category, index) => (
                    <a key={index}
                        href={`/${category}`}
                        onClick={(e) => slidToSection(e, category.replace(/ /g,'').toLowerCase())}>
                        {category}
                    </a>
                ))}
            </div>
            <div className="flex-category-container">
                {menuCategory.map((category, index) => (
                    <div key={index} id={`${category.replace(/ /g,'').toLowerCase()}-section`}>
                        <h2 className="sectiontitle category">{category}</h2>
                        {dishes.map((dish, index) => (
                            category === dish.category && <Dish key={index} dish={dish} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderOnline;