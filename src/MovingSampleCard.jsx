import './MovingSamples.css'
import { useRef, useEffect } from 'react'

function MovingSampleCard({progress2, img, title, text, id}){
    const thisCard = useRef();
    
    return(
        <div className='moving-sample-card' id={id} ref={thisCard}>
            <img src={img}/>
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