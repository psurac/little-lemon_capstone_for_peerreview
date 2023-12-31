import Button from "./Button.js";
import { useSitesContext } from '../context/SitesContext.js';
import { useMenu } from "../context/MenuContext.js";
import Special from "./Special.js";
import './SpecialSection.css';

function SpecialsSection() {
    const { getSitePathByName } = useSitesContext();
    const name = 'Menu';
    const { dishes } = useMenu();

    return (
        <div className="grid-ss">
            <h1 className="sectiontitle padd-right-left">Specials</h1>
            <div className="button padd-right-left">
                <Button link={getSitePathByName(name)} buttonText={name} />
            </div>
            <div className="specials-container padd-right-left">
                {dishes.map(item => item.special ? <Special dish={item} key={item.id} /> : null)}
            </div>
        </div>
    );
};

export default SpecialsSection;