import { useRef, useEffect, useCallback } from 'react'
import './NavBar.css'
import CTAButton from './CTAButton'
import CalendlyPopUp from './CalendlyPopUp';

function NavBar({progress, showBar}) {
    //used the same colorProgress varaible for easier syntax
    //progress is used to determine when navbar should disappear while animating
    //refer to NavBar.css to change the timings
    const navRef = useRef();
    let colorProgress = 0;
    const minProg = 0.26;
    const maxProg = 0.95;

    // const backgroundRef = useRef()
    const logoRef = useRef()
    const homeRef = useRef()
    const aboutUsRef = useRef()
    const ourServicesRef = useRef()
    const designRef = useRef()
    const ctaRef = useRef()


    useEffect(()=>{
        // console.log(progress)
        colorProgress = (progress - minProg) / (maxProg - minProg); //gets the percentatge
        // console.log((colorProgress*99)/100)
        navRef.current.style.setProperty('--progress', `${Math.min(1, Math.max(0, colorProgress))}`)//limits it to 99% but also dividing again to 100 to return to decimal
        // const currentScroll = window.scrollY
        // if(currentScroll > window.innerHeight * 2) navRef.current.style.setProperty('--progress', `1`)
    }, [progress])


    useEffect(()=>{
        if(showBar){
            navRef.current.style.opacity = '1';
        } else {
            navRef.current.style.opacity = '0';
        }

    },[showBar])


    return(
        <nav className='nav-bar' ref={navRef}>
            {/* <div className='background-div' ref={backgroundRef}></div> */}
            <a className='logo-wrapper nav-column nav-item' href='#home'>
                <h2 className='old-font ' ref={logoRef}>XBUILT Technology</h2>
                {/* <img src={dota2Logo}></img> */}
            </a>

            <div className='nav-links nav-column nav-item'>
                <a href='#home' ref={homeRef} className='nav-item'>HOME</a>
                <a href='#aboutUs' ref={aboutUsRef} className='nav-item'>ABOUT US</a>
                <a href='#ourServices' ref={ourServicesRef} className='nav-item'>SERVICES</a>
                <a href='#designPortfolio' ref={designRef} className='nav-item'>PORTFOLIO</a>
            </div>

            <div className='cta-wrapper nav-column nav-item' >
                <div ref={ctaRef} className='button-wrapper'>
                   {/* <CTAButton/>  */}
                   <CalendlyPopUp/>
                </div>
                
            </div>

        </nav>
    )
}

export default NavBar