import { useEffect } from 'react'
import './CTAButton.css'

function CTAButton({ text = "BOOK A CALL", href="#home", icon, newTab = false }){
    useEffect(()=>{
        console.log(text, ", ", newTab)
    },[])

    return(
        <a className='cta-button' href={href} target={newTab ? '_blank' : '_self'}>{icon ? <img src={icon}/> : ''}{text}</a>     
    )
}

export default CTAButton