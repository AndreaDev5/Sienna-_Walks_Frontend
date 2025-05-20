
import {useEffect} from 'react'
import AboutHero from '../../components/AboutHero/AboutHero'
import AboutStory from '../../components/AboutStory/AboutStory'
import AboutValues from '../../components/AboutValues/AboutValues'
import Footer from '../../components/Footer/Footer'
import BurguerButton from '../../atoms/BurguerButton/BurguerButton'

const AboutStore = () => {
  useEffect(()=>{
      window.scrollTo(0, 0); 
    },[])
  return (
    <>
      <BurguerButton buttonMode={true}/>
      <AboutHero/>
      <AboutStory/>
      <AboutValues/>
      <Footer footerWidth={934}/>
    </>
  )
}

export default AboutStore
