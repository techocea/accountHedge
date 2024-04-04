import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Whymyob from '../components/whymyob';
import HeroV2 from '../components/Hero V2';

//import { ReactComponent as CompanyIcon } from './assets/crown.svg';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Home = () => {
    return (
        <>
            <Hero />
            <HeroV2 />
            <Intro />
            <Whymyob />
            <Services />           
            <Portfolio />
            <Pricing    />
            <Clients />
            <Cta/>
            <Footer />
            <WhatsAppWidget  phoneNumber="447445028046" />
            {/* <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="447445028046" /> */}
        </>
        

    )
}

export default Home;

