import './CTAButton.css'

function CTAButton({ text = "BOOK A CALL" }){

    return(

            <button className='cta-button'>{text}</button> 

        
    )
}

export default CTAButton