import Hero from '../components/Hero.jsx';
import SeccionPromoEvento from '../components/SeccionPromoEvento.jsx';
import CocktailExperience from '../components/CocktailExperience.jsx';
import AboutOverlay from '../components/AboutOverlay.jsx';
import VesubioBartenders from '../components/VesubioBartenders.jsx';
import NightMixFooter from '../components/NightMixFooter.jsx';


export default function HomeScreen() {
    return (
        <div className='homeScreen-container'>
            <Hero />
            <SeccionPromoEvento />
            <AboutOverlay />
            <CocktailExperience />
            <VesubioBartenders />
            <NightMixFooter />
        </div>
    );
}