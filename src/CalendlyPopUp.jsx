import {useState, useEffect} from 'react'
import './CalendlyPopUp.css'
import './CTAButton.css'

function CalendlyPopUp( {text = "Book A Call"} ){
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const openCalendly = () => {
        window.Calendly.initPopupWidget({
        url: "https://calendly.com/xbuilt-technologies/30min",
        });
    };

    return (
        <button onClick={openCalendly} className='cta-button'>
            {text}
        </button>
    );
}

export default CalendlyPopUp