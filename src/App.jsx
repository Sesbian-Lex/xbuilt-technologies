import { useState, useRef, useEffect } from 'react'
import './App.css'
import DisappearingTitle from './DisappearingTitle.jsx'
import HomeCanvas from './HomeCanvas.jsx'
import ScrollBar from './ScrollBar.jsx'
import NavBar  from './NavBar.jsx'
import FloatingLogoCanvas from './FloatingLogoCanvas.jsx'
import ServiceCarousel from './ServiceCarousel.jsx'
import LandingPageImg from './assets/landing-page-img.png'
import LandingPageIcon from './assets/landing-page-icon.png'
import FunnelDesign from './assets/funnel-design.png'
import FunnelDesignIcon from './assets/funnel-design-icon.png'
import CRMPipe from './assets/crm-pipelines.png'
import CRMPipeIcon from './assets/crm-pipelines-icon.png'
import WebDesign from './assets/web-design.png'
import WebDesignIcon from './assets/web-design-icon.png'
import VidEdit from './assets/vid-edit.png'
import VidEditIcon from './assets/vid-edit-icon.png'

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

        <br/><br/><br/><br/><br/><br/><br/>
        <ServiceCarousel/>
        <br/><br/><br/><br/><br/><br/><br/>

        <div id='landingPage' className='service-explanation-wrapper'>
          <div className='service-img-wrapper'>
              <img src={LandingPageImg}/>
          </div>
          <div className='service-text-wrapper'>
            <img src={LandingPageIcon}/>
            <h2>
              1) Landing Pages Design
            </h2>
            <h3>
              Custom-built pages designed to attract, engage, and
              convert casual visitors into high-quality leads
            </h3>
          </div>
        </div>

        <br/><br/><br/>

        <div id='funnelDesign' className='service-explanation-wrapper'>
          <div className='service-img-wrapper'>
              <img src={FunnelDesign}/>
          </div>
          <div className='service-text-wrapper'>
            <img src={FunnelDesignIcon}/>
            <h2>
              2) Funnel Design & Automation
            </h2>
            <h3>
              Funnel design and automation that captures leads and
              nurtures them with personalized, automated workflows
            </h3>
          </div>
        </div>

        <br/><br/><br/>

        <div id='crmPipe' className='service-explanation-wrapper'>
          <div className='service-img-wrapper'>
              <img src={CRMPipe}/>
          </div>
          <div className='service-text-wrapper'>
            <img src={CRMPipeIcon}/>
            <h2>
              3) CRM & Pipelines
            </h2>
            <h3>
              Integrated CRM systems and sales pipelines that organize
              leads, track opportunities, and keep your sales process
              running smoothly.
            </h3>
          </div>
        </div>

        <br/><br/><br/>

        <div id='webDesign' className='service-explanation-wrapper'>
          <div className='service-img-wrapper'>
              <img src={WebDesign}/>
          </div>
          <div className='service-text-wrapper'>
            <img src={WebDesignIcon}/>
            <h2>
              4) Website Design & Development
            </h2>
            <h3>
              Custom-designed websites that captivate, build credibility,
              and guide visitors to take meaningful action
            </h3>
          </div>
        </div>

                <br/><br/><br/>

        <div id='vidEdit' className='service-explanation-wrapper'>
          <div className='service-img-wrapper'>
              <img src={VidEdit}/>
          </div>
          <div className='service-text-wrapper'>
            <img src={VidEditIcon}/>
            <h2>
              5) Video Editing
            </h2>
            <h3>
              Professional video editing that turns your content into
              engaging, high-quality videos that captivate your audience
              and strengthen your brand
            </h3>
          </div>
        </div>

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
