import './App.css'
import FloatingLogoCanvas from './FloatingLogoCanvas.jsx'

function AboutUs(){

    return(
        <>
            <h1 className='page-title title-size about-us'>ABOUT US</h1>
            <div className='logo-and-text-wrapper'>
            <div className='floating-logo-wrapper'>
                <FloatingLogoCanvas/>
            </div>
            <div className='section-2-text-wrapper'>
                <h2 style={{textAlign:'center', fontStyle:'italic' }}>XBuilt Technology</h2>

                <br/>

                <h3 style={{ color: "var(--gray-text-color)", fontWeight:'500' }}>
                We transform service based businesses into client generating machines
                through strategic web design and conversion-focused funnels.
                </h3>

                <br/>
                <br/>

                <h3 style={{ color: "var(--gray-text-color)", fontWeight:'500' }}>
                With over 3+ years of experience helping businesses build high-
                performing websites and AI-powered automated systems using
                GoHighLevel, we create solutions that streamline operations, capture
                qualified leads, and convert traffic into paying customers. Our focus is on
                clarity, performance, and scalability making sure every system works
                together to support long-term business growth.
                </h3>

                <br/>
                <br/>

                <h2 className='ending-sentence'>
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
        </>
    )
}

export default AboutUs