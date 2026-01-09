import './ServiceCarousel.css'
import { useEffect, useRef, useState }  from 'react'
import ServiceCarouselCard from './ServiceCarouselCard'
import LandingPageImg from './assets/landing-page-img.png'
import FunnelDesign from './assets/funnel-design.png'
import CRMPipe from './assets/crm-pipelines.png'
import WebDesign from './assets/web-design.png'
import VidEdit from './assets/vid-edit.png'

function ServiceCarousel(){
    const [offset, setOffset] = useState(2);
    const carouselRef = useRef();
    const leftArrow = useRef();
    const rightArrow = useRef();
    const carouselWidth = useRef(0);
    const autoSlideRef = useRef(null);

    
    
    useEffect(()=>{
        carouselWidth.current = carouselRef.current.getBoundingClientRect().width
        console.log(carouselWidth.current)
        leftArrowHandle();
        rightArrowHandle();
    },[])

    useEffect(() => {
        startAutoSlide();

        return () => {
            clearInterval(autoSlideRef.current);
        };
    }, []);

    //arrow handles to change the offset
    function leftArrowHandle() {
        setOffset(prev => prev + 1);
        startAutoSlide();
    }

    function rightArrowHandle() {
        setOffset(prev => prev - 1);
        startAutoSlide();
    }

    function startAutoSlide() {
    if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
    }

    autoSlideRef.current = setInterval(() => {
        setOffset(prev => prev - 1);
    }, 5000);
}


    return(
        <div className='service-carousel' ref={carouselRef}>
            <div className='left-arrow' ref={leftArrow} onClick={leftArrowHandle}>🠼</div>
            <ServiceCarouselCard img={LandingPageImg} offset={offset + 0} parentWidth={carouselWidth} destination={'#landingPage'}/>
            <ServiceCarouselCard img={FunnelDesign} offset={offset + 1} parentWidth={carouselWidth} destination={'#funnelDesign'}/>
            <ServiceCarouselCard img={CRMPipe} offset={offset + 2} parentWidth={carouselWidth} destination={'#crmPipe'}/>
            <ServiceCarouselCard img={WebDesign} offset={offset + 3} parentWidth={carouselWidth} destination={'#webDesign'} />
            <ServiceCarouselCard img={VidEdit} offset={offset + 4} parentWidth={carouselWidth} destination={'#vidEdit'}/>
            <div className='right-arrow' ref={rightArrow} onClick={rightArrowHandle}>🠾</div>
        </div>
    )
}

export default ServiceCarousel