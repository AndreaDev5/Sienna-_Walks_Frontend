import { useEffect } from 'react';
import Collections from '../../components/Collections/Collections';
import Form from '../../components/Form/Form';
import Hero from '../../components/Hero/Hero';
import LastRelease from '../../components/LastRelease/LastRelease';
import './Home.css';
import PersonalizeShoes from '../../components/PersonalizeShoes/PersonalizeShoes';
import Footer from '../../components/Footer/Footer'
import BurguerButton from '../../atoms/BurguerButton/BurguerButton';

function Home() {
  useEffect(()=>{
    window.scrollTo(0, 0); 
  },[])

return (
    <>   
        <Hero/>
        <BurguerButton buttonMode={true}/>
        <main className='home-container'>
            <Collections/>
            <LastRelease/>
        </main>
        <PersonalizeShoes/>
        <Form/>
        <Footer/>
    </>
);
}

export default Home;
