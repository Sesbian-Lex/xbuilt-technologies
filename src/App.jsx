import { useState, useRef, useEffect } from 'react'
import './App.css'
import DisappearingTitle from './DisappearingTitle.jsx'
import HomeCanvas from './HomeCanvas.jsx'
import ScrollBar from './ScrollBar.jsx'
import NavBar  from './NavBar.jsx'
import FloatingLogoCanvas from './FloatingLogoCanvas.jsx'

function App() {
  const [progress, setProgress] = useState(0.25)

  return (
    <>
      <ScrollBar/>
      <NavBar progress={progress}/> 
      
      
      <section className='section1' id='home'>

        <DisappearingTitle progress={progress}/>
        <HomeCanvas progress={progress} progressUpdate={setProgress}/>

      </section>

      <section className='section2' id='aboutUs'>

        <h1 className='title-gradient title-size'>ABOUT US</h1>
        <div className='logo-and-text-wrapper'>
          <div className='floating-logo-wrapper'>
            <FloatingLogoCanvas/>
          </div>
          <div className='section-2-text-wrapper'>
            <h2 style={{textAlign:'center'}}>XBuilt Technology</h2>

            <h3 style={{ color: "var(--gray-text-color)" }}>
              We transform service based businesses into client generating machines
            through strategic web design and conversion-focused funnels.
            </h3>

            <br/>

            <h3 style={{ color: "var(--gray-text-color)" }}>
            With over 3+ years of experience helping businesses build high-
            performing websites and AI-powered automated systems using
            GoHighLevel, we create solutions that streamline operations, capture
            qualified leads, and convert traffic into paying customers. Our focus is on
            clarity, performance, and scalability making sure every system works
            together to support long-term business growth.
            </h3>

            <br/>

            <h2>
              <em>
                "Your Website Should Work Harder Than You Do."
              </em>
            </h2>

            <br/>
            <br/>
            <br/>
            <h1>  </h1>
            

          </div>

        </div>
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
      </section>

      <section className='section4' id=''>
        <h2>Our Services</h2>
        
      </section>
        <section className='section4' id=''>
        <h2>Our Services</h2>
        
      </section>
    </>
  )
}

export default App
