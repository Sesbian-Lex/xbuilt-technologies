import figma from './assets/figma.png'
import ghl from './assets/ghl.png'
import kajabi from './assets/kajabi.png'
import './LogoCards.css'

function LogoCards(){

    return(<div className='logo-cards-wrapper'>
        <div className='logo-cards'>
            <img src={figma}/>
            <h3>Figma</h3>
        </div>
        <div className='logo-cards'>
            <img src={ghl}/>
            <h3>GoHighLevel</h3>
        </div>
        <div className='logo-cards'>
            <img src={kajabi}/>
            <h3>Kajabi</h3>
        </div>
        
        
        
        {/* <img src={dota2Logo}/> */}
    </div>)
}

export default LogoCards