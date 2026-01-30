import { useRef, useEffect, useCallback } from 'react'
import './NavBar.css'
import CTAButton from './CTAButton'

function NavBar({progress}) {
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
        navRef.current.style.setProperty('--progress', `${(colorProgress*99)/100}`)//limits it to 99% but also dividing again to 100 to return to decimal

    }, [progress])

    useEffect(()=>{
        
        navRef.current.addEventListener("mouseenter", (event) => {
            backgroundDarken();
            logoDarken();
            homeDarken();
            aboutUsDarken();
            ourServicesDarken();
            designDarken();
            ctaDarken();
        })

        navRef.current.addEventListener("mouseleave", (event) => {
            backgroundLighten();
            logoLighten();
            homeLighten();
            aboutUsLighten();
            ourServicesLighten();
            designLighten();
            ctaLighten();
        })

        logoRef.current.addEventListener("mouseenter", (event) => {
            logoLighten();
        })

        logoRef.current.addEventListener("mouseleave", (event) => {
            logoDarken();
        })

        homeRef.current.addEventListener("mouseenter", (event) => {
            homeLighten();
        })

        homeRef.current.addEventListener("mouseleave", (event) => {
            homeDarken();
        })

        aboutUsRef.current.addEventListener("mouseenter", (event) => {
            aboutUsLighten();
        })

        aboutUsRef.current.addEventListener("mouseleave", (event) => {
            aboutUsDarken();
        })

        ourServicesRef.current.addEventListener("mouseenter", (event) => {
            ourServicesLighten();
        })

        ourServicesRef.current.addEventListener("mouseleave", (event) => {
            ourServicesDarken();
        })

        designRef.current.addEventListener("mouseenter", (event) => {
            designLighten();
        })

        designRef.current.addEventListener("mouseleave", (event) => {
            designDarken();
        })

        ctaRef.current.addEventListener("mouseenter", (event) => {
            ctaLighten();
        })

        ctaRef.current.addEventListener("mouseleave", (event) => {
            ctaDarken();
        })

    },[])

    const backgroundDarken = useCallback(()=>{
        navRef.current.style.backgroundColor = "#0c0c0c66"
    }, [])

    const backgroundLighten = useCallback(()=>{
        navRef.current.style.backgroundColor = "#0c0c0c"
    }, [])

    const logoDarken = useCallback(()=>{
        logoRef.current.style.opacity = "0.4"
    }, [])

    const logoLighten = useCallback(()=>{
        logoRef.current.style.opacity = "1"
    }, [])

    const homeDarken = useCallback(()=>{
        homeRef.current.style.opacity = "0.4"
    }, [])

    const homeLighten = useCallback(()=>{
        homeRef.current.style.opacity = "1"
    }, [])

    const aboutUsDarken = useCallback(()=>{
        aboutUsRef.current.style.opacity = "0.4"
    }, [])

    const aboutUsLighten = useCallback(()=>{
        aboutUsRef.current.style.opacity = "1"
    }, [])

    const ourServicesDarken = useCallback(()=>{
        ourServicesRef.current.style.opacity = "0.4"
    }, [])

    const ourServicesLighten = useCallback(()=>{
        ourServicesRef.current.style.opacity = "1"
    }, [])

    const designDarken = useCallback(()=>{
        designRef.current.style.opacity = "0.4"
    }, [])

    const designLighten = useCallback(()=>{
        designRef.current.style.opacity = "1"
    }, [])

    const ctaDarken = useCallback(()=>{
        ctaRef.current.style.opacity = "0.4"
    }, [])

    const ctaLighten = useCallback(()=>{
        ctaRef.current.style.opacity = "1"
    }, [])

    return(
        <nav className='nav-bar' ref={navRef}>
            {/* <div className='background-div' ref={backgroundRef}></div> */}
            <div className='logo-wrapper nav-column'>
                <h2 className='old-font' ref={logoRef} >XBUILT Technologies</h2>
                {/* <img src={dota2Logo}></img> */}
            </div>

            <div className='nav-links nav-column'>
                <a href='#home' ref={homeRef}>HOME</a>
                <a href='#aboutUs' ref={aboutUsRef}>ABOUT US</a>
                <a href='#ourServices' ref={ourServicesRef}>SERVICES</a>
                <a href='#designPortfolio' ref={designRef}>PORTFOLIO</a>
            </div>

            <div className='cta-wrapper nav-column' >
                <div ref={ctaRef} className='button-wrapper'>
                   <CTAButton/> 
                </div>
                
            </div>

        </nav>
    )
}

export default NavBar