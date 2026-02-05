import './MovingSamples.css'
import { useRef, useEffect } from 'react'

function MovingSampleCard({progress2, img, title, text, id, startingLeft, startingTop,parentRef}){
    const thisCard = useRef();

    useEffect(()=>{
        const width = thisCard.current.getBoundingClientRect().width
        // const currentLeft = thisCard.current.getBoundingClientRect().left
        // console.log(currentLeft)

        //gets the parent ref to get the parent width
        //takes the starting left position prop to determine where in 0 - 100
        ////the left is
        //removes half the current width to center
        thisCard.current.style.left = `${(parentRef.current.getBoundingClientRect().width * (startingLeft/100)) - (width/2)}px`
        thisCard.current.style.top = `${(parentRef.current.getBoundingClientRect().height * (startingTop/100))}px`
        // console.log(startingLeft.current);
    },[progress2])

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