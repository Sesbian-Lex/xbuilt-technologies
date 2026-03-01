import './MovingSamples.css'
import { useRef, useEffect } from 'react'
import laptop from './assets/laptop.png'

function MovingSampleCard({progress2, img, title, text, id}){
    const thisCard = useRef();
    
    return(
        <div className='moving-sample-card' id={id} ref={thisCard}>

            <img src={img} className='main-img'/>
            <img src={laptop} className='disappearing-laptop'/>

            
            <h2>
                {title}
            </h2>
            <h3>
                {text}
            </h3>
        </div>
    )
}

export default MovingSampleCard