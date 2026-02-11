import './CTAButton.css'

function CTAButton({ text = "BOOK A CALL", href="#home", icon }){

    return(
        <button className='cta-button' href={href}>{icon ? <img src={icon}/> : ''}{text}</button>     
    )
}

export default CTAButton