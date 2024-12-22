import React from 'react'
import { TransportPage } from './_components/Home/Hero'
import { AboutSection } from './_components/Home/About'
import { ServicesSection } from './_components/Home/Services'
import ProcessSection from './_components/Home/Processing'
import { WhyUs } from './_components/Home/WhyUs'
import Reviews from './_components/Reviews'
import { FAQTWO } from './_components/Home/FAQ'
import ScrollBaseAnimation from './_components/text-marquee'

function page() {
  const cities = 'Ale kommun | Alingsås kommun | Bengtsfors kommun | Bollebygds kommun | Borås stad | Dals-Eds kommun | Essunga kommun | Falköpings kommun | Färgelanda kommun | Grästorps kommun | Gullspångs kommun | Göteborgs stad | Götene kommun | Herrljunga kommun | Hjo kommun | Härryda kommun | Karlsborgs kommun | Kungälvs kommun | Lerums kommun | Lidköpings kommun | Lilla Edets kommun | Lysekils kommun | Mariestads kommun | Marks kommun | Melleruds kommun | Munkedals kommun | Mölndals stad | Orust kommun | Partille kommun | Skara kommun | Skövde kommun | Sotenäs kommun | Stenungsunds kommun | Strömstads kommun | Svenljunga kommun | Tanums kommun | Tibro kommun | Tidaholms kommun | Tjörns kommun | Tranemo kommun | Trollhättans stad | Töreboda kommun | Uddevalla kommun | Ulricehamns kommun | Vara kommun | Vårgårda kommun | Vänersborgs kommun | Åmåls kommun | Öckerö kommun';

  return (
    <div className=''>
      <TransportPage />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUs />
      <Reviews />
      <FAQTWO />
      {/* <ServicesSlider /> */}
      {/* <AboutUs /> */}
      {/*
       <HowItWorks /> */}
      {/*

      <LocationArea />
      <FAQ /> */}

    </div>
  )
}

export default page