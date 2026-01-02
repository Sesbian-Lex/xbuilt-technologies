import './ServiceCarousel.css'
import { useEffect, useRef, useState }  from 'react'
import ServiceCarouselCard from './ServiceCarouselCard'
import LandingPageImg from './assets/landing-page-img.png'
import FunnelDesign from './assets/funnel-design.png'
import CRMPipe from './assets/crm-pipelines.png'
import WebDesign from './assets/web-design.png'
import VidEdit from './assets/vid-edit.png'

function ServiceCarousel(){
    const [offset, setOffset] = useState(0);
    const carouselRef = useRef();
    const leftArrow = useRef();
    const rightArrow = useRef();
    const carouselWidth = useRef(0);
    
    useEffect(()=>{
        carouselWidth.current = carouselRef.current.getBoundingClientRect().width
        console.log(carouselWidth.current)
    },[])

    function leftArrowHandle() {
        setOffset(prev => prev - 1); 
    }

    function rightArrowHandle() {
        setOffset(prev => prev + 1);
    }


    return(
        <div className='service-carousel' ref={carouselRef}>
            <div className='left-arrow' ref={leftArrow} onClick={leftArrowHandle}>🠼</div>
            <ServiceCarouselCard img={LandingPageImg} offset={offset + 0} parentWidth={carouselWidth} destination={'home'}/>
            <ServiceCarouselCard img={FunnelDesign} offset={offset + 1} parentWidth={carouselWidth}/>
            <ServiceCarouselCard img={CRMPipe} offset={offset + 2} parentWidth={carouselWidth}/>
            <ServiceCarouselCard img={WebDesign} offset={offset + 3} parentWidth={carouselWidth}/>
            <ServiceCarouselCard img={VidEdit} offset={offset + 4} parentWidth={carouselWidth}/>
            <div className='right-arrow' ref={rightArrow} onClick={rightArrowHandle}>🠾</div>
        </div>
    )
}

export default ServiceCarousel