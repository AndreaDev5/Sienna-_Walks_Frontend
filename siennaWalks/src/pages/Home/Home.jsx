import React from 'react';
import Collections from '../../components/Collections/Collections';

import Form from '../../components/Form/Form';
import Hero from '../../components/Hero/Hero';
import LastRelease from '../../components/LastRelease/LastRelease';
import './Home.css';
import PersonalizeShoes from '../../components/PersonalizeShoes/PersonalizeShoes';

function Home() {
return (
    <React.Fragment>   
        <Hero/>
        <main className='home-container'>
            <Collections/>
            <LastRelease/>
        </main>
        <PersonalizeShoes/>
        <Form/>
    </React.Fragment>
);
}

export default Home;
