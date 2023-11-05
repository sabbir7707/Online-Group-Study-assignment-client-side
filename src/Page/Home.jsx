import { Link } from "react-router-dom";
import IntroImage from '../assets/images/intro.jpg';
import Container from "./UI/Container ";
import Banner from "./Home_componant/Banner";
import Featare_section from "./Home_componant/Featare_section";
import Faq from "./Home_componant/Faq";

const Home = () => {
    return (
        <Container>
            
            
            <Banner></Banner>
            <Featare_section></Featare_section>
            <Faq></Faq>

        </Container>
    );
};

export default Home;