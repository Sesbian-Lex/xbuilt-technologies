import { useEffect, useRef, useState }  from 'react'
import './ServiceCarousel.css'

function ServiceCarouselCard({offset, img, parentWidth, destination}){
    const carouselCardWrapper = useRef(); //needed to change the style later

    // useEffect(()=>{
    //     console.log(parentWidth.current)
    //     console.log(carouselCardWrapper.current.getBoundingClientRect().width)
    // },[])

    useEffect(()=>{
        // console.log(offset)
        // positive offset 
        //else for negative offset
        if(offset > 4){
            offset %= 5;
        } else if(offset<0){ 
            offset = ((offset%5)+5)%5;
            // console.log("negative: ", offset%5)
        }
        //get the width of the object
        const width = carouselCardWrapper.current.getBoundingClientRect().width;
        //move the object to position depending on the parent and current offset
        carouselCardWrapper.current.style.left = `${(parentWidth.current/5) * offset}px`
        //middlemost offset being more noticable
        if (offset == 2){
             carouselCardWrapper.current.style.transform = 'scale(1.15)';
             carouselCardWrapper.current.style.zIndex = '3';
             carouselCardWrapper.current.style.opacity = '1';
        }
        else if (offset == 1 || offset == 3){
             carouselCardWrapper.current.style.transform = 'scale(1.075)';
             carouselCardWrapper.current.style.zIndex = '2';
             carouselCardWrapper.current.style.opacity = '0.9';
        }
        else if (offset == 0 || offset == 4){
             carouselCardWrapper.current.style.transform = 'scale(1)';
             carouselCardWrapper.current.style.zIndex = '1';
             carouselCardWrapper.current.style.opacity = '0.75';
        }

    },[offset])
    //testing if img is clicked  
    // function imgClick(){
    //     console.log("image clicked", offset)
    // }



    return <a href={destination} className='carousel-card-wrapper' ref={carouselCardWrapper}>
        <img src={img} className='carousel-card-img'/>
    </a>
}

export default ServiceCarouselCard