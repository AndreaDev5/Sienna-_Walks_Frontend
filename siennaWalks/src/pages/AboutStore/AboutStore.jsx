import React from 'react'
import AboutHero from '../../components/AboutHero/AboutHero'
import AboutStory from '../../components/AboutStory/AboutStory'
import AboutValues from '../../components/AboutValues/AboutValues'
import Footer from '../../components/Footer/Footer'

const AboutStore = () => {
  return (
    <div className='about-sienna'>
      <AboutHero/>
      <AboutStory/>
      <AboutValues/>
      <Footer footerWidth={934}/>
    </div>
  )
}

export default AboutStore
