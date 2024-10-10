import Collections from '../../components/Collections/Collections';
import Hero from '../../components/Hero/Hero';
import LastRelease from '../../components/LastRelease/LastRelease';
import './Home.css';  


function Home() {
return (
    <>
        <Hero/>
        <main className='home-container'>
            <Collections/>
            <LastRelease/>
        </main>
    </>
);
}

export default Home;
