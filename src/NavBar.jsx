import { useRef, useEffect } from 'react'
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

    useEffect(()=>{
        // console.log(progress)
        colorProgress = (progress - minProg) / (maxProg - minProg); //gets the percentatge
        // console.log((colorProgress*99)/100)
        navRef.current.style.setProperty('--progress', `${(colorProgress*99)/100}`)//limits it to 99% but also dividing again to 100 to return to decimal


    }, [progress])

    return(
        <nav className='nav-bar' ref={navRef}>
            <div className='logo-wrapper nav-column'>
                <h2>XBUILT Technologies</h2>
                {/* <img src={dota2Logo}></img> */}
            </div>

            <div className='nav-links nav-column'>
                <a href='#home'>HOME</a>
                <a href='#aboutUs'>ABOUT US</a>
                <a href='#ourServices'>SERVICES</a>
                <a href='#designPortfolio'>PORTFOLIO</a>
            </div>

            <div className='cta-wrapper nav-column'>
                <CTAButton/>
            </div>

        </nav>
    )
}

export default NavBar