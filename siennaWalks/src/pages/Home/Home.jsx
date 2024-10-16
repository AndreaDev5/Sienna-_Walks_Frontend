import React from 'react';
import Collections from '../../components/Collections/Collections';
import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Hero from '../../components/Hero/Hero';
import LastRelease from '../../components/LastRelease/LastRelease';
import Promotions from '../../components/Promotions/Promotions';
import './Home.css';  

function Home() {
return (
    <React.Fragment>   
        <Hero/>
        <main className='home-container'>
            <Collections/>
            <LastRelease/>
            <Promotions/>
        </main>
        <Form/>
        <Footer/>
    </React.Fragment>
);
}

export default Home;
