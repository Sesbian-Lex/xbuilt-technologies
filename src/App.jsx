import { useState, useRef, useEffect } from 'react'
import './App.css'
import HomeCanvas from './HomeCanvas.jsx'
import ScrollBar from './ScrollBar.jsx'
import NavBar  from './NavBar.jsx'
import FloatingLogoCanvas from './FloatingLogoCanvas.jsx'
import ServiceCarousel from './ServiceCarousel.jsx'
import MovingSamples from './MovingSamples.jsx'
import AccordionFaq from './AccordionFaq.jsx'
import TempProfile from './assets/temp-profile-pic.webp'
import ClosingImg from './assets/closing-image.png'
import CTAButton from './CTAButton.jsx'
import ProcessSection from './ProcessSection.jsx'
import AboutUs from './AboutUs.jsx'
import OurServices2 from './OurServices2.jsx'
import TimothyProfile from './assets/timothy-testimonals.png'
import AlexiProfile from './assets/alexi-testimonals.png'
import HomirxProfile from './assets/homirx-testimonals.png'


function App() {
  const [progress, setProgress] = useState(0.26)
  const [showBar, setShowBar] = useState(false)

  // useEffect(()=>{console.log(progress)},[progress])

  return (
    <>
      <ScrollBar showBar={showBar} setShowBar={setShowBar}/>
      <NavBar 
      progress={progress} showBar={showBar}
      /> 
      
      
      <section className='section1' id='home'>

        {/* <DisappearingTitle progress={progress}/> */}
        <HomeCanvas 
          progress={progress} progressUpdate={setProgress}
        />

      </section>

      <section className='section2' id='aboutUs'>
        <AboutUs/>
      </section>

      <section className='section3' id='ourServices'>
        <h1 className='title-gradient title-size'>OUR SERVICES</h1>
        <h2>We don’t just design websites. We build systems that
          attract, engage, and convert your ideal clients
          helping your business grow smarter and faster
        </h2>
        <h3>
          From high-converting landing pages and sales funnels to automated CRM systems and
          streamlined workflows, every service we provide is designed to save you time, capture more
          leads, and turn traffic into paying clients.
        </h3>

        <br/><br/><br/><br/><br/><br/><br/>
        <ServiceCarousel/>
        <br/><br/><br/><br/><br/><br/><br/>

      </section>

      <section className='section3_5'>       
        <OurServices2/>
      </section>

      <section className='section4_5' id='processSection'>
        <ProcessSection />

      </section>

      <section className='section4' id='designPortfolio'>
        <MovingSamples/>
       
        
      </section>

      <section className='section5' id='testimonals'>
        <h1 className='page-title title-size'>TESTIMONALS</h1>
        <div className='testimonal-cards-wrapper'> 
          <div className='testimonal-card'>
            <img src={TimothyProfile}/>
            <br/>
            <h3>
              “XBuilt Technology
                delivered exactly what I needed a
                clean, high-converting funnel that
                actually works. The structure, flow,
                and automation made the entire
                process seamless and effective.”
            </h3>
            <br/>
            <h3>
              - Timothy Roberts 
            </h3>
          </div>

          <div className='testimonal-card'>
            <img src={AlexiProfile}/>
            <br/>
            <h3>
              “From design to execution,
              everything was handled smoothly.
              The landing page perfectly
              represents our brand and has helped
              us create a stronger online
              presence.”
            </h3>
            <br/>
            <h3>
              - Alexi 
            </h3>
          </div>

          <div className='testimonal-card'>
            <img src={HomirxProfile}/>
            <br/>
            <h3>
              “They transformed our landing page
              into something professional,
              modern, and easy for clients to
              navigate. The attention to detail and
              focus on user experience really set
              them apart.”
            </h3>
            <br/>
            <h3>
              - Homirx
            </h3>
          </div>
        </div>

      </section>

      <section className='section6' id='faqs'>
        <h1 className='title-gradient title-size'>FAQS</h1>
        <h2>Frequently Asked Questions</h2>
        <h3>Get answers to common questions about working with me.</h3>

        <br/> 

        <AccordionFaq/>

        
      </section>

      <section className='section7' id='closing-section'>
        <div className='floating-logo-wrapper-2'>
          <FloatingLogoCanvas/>
        </div>

        <img src={ClosingImg} className='closing-img'/>

        <div className='section7-text-wrapper'>
          <h1>Ready to Build a Site That Actually Works?</h1>
          <h3>
            We don't chase trends. We build a reliable digital systems that power your sales process, strengthen your brand, and deliver consisten, high-quality results
          </h3>
          <br/>
          <CTAButton text="BOOK A FREE DISCOVERY CALL"/>
        </div>


        
      </section>      
    </>
  )
}

export default App
