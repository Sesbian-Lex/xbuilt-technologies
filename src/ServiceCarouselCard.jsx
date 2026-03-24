import { useEffect, useRef, useState }  from 'react'
import './ServiceCarousel.css'

function ServiceCarouselCard({offset, img, parentWidth, destination}){
    const carouselCardWrapper = useRef(); //needed to change the style later

    // useEffect(()=>{
    //     console.log(parentWidth.current)
    //     console.log(carouselCardWrapper.current.getBoundingClientRect().width)
    // },[])

    useEffect(()=>{
        const total_cards = 5//change this if more
        const shown_cards = 3
        //remember to change the aspect ratio of service-carousel
        //  if any of the values here change
        //a card is 4/5 aspect ration, so 3-card-wide carousel is 12/5

        // console.log(offset)
        // positive offset 
        //else for negative offset
        if(offset > total_cards - 1){
            offset %= total_cards;
        } else if(offset<0){ 
            offset = ((offset%total_cards)+total_cards)%total_cards;
            // console.log("negative: ", offset%5)
        }

        // console.log("cardOffset:", offset)
        //get the width of the card
        const width = carouselCardWrapper.current.getBoundingClientRect().width;

                //move the card to position depending on the parent and current offset
        carouselCardWrapper.current.style.left = `${((parentWidth.current)/shown_cards) * offset}px`

        //middlemost offset being more noticable
        if (offset == 1){
             carouselCardWrapper.current.style.transform = 'scale(1)';
             carouselCardWrapper.current.style.zIndex = '3';
             carouselCardWrapper.current.style.opacity = '1';
        }
        else if (offset == 0 || offset == 2){
             carouselCardWrapper.current.style.transform = 'scale(0.90)';
             carouselCardWrapper.current.style.zIndex = '2';
             carouselCardWrapper.current.style.opacity = '0.9';
        }
        // else if (offset == 3 || offset == 4){
        //      carouselCardWrapper.current.style.transform = 'scale(0.85)';
        //      carouselCardWrapper.current.style.zIndex = '1';
        //      carouselCardWrapper.current.style.opacity = '0.75';

        //      if (offset == 0){
        //         carouselCardWrapper.current.style.left = `${(parentWidth.current*0.015 )}px`
        //      } else if (offset == 4){
        //         carouselCardWrapper.current.style.left = `${(parentWidth.current) - (parentWidth.current*0.015) - (parentWidth.current/5)}px`
        //      }
        // } 
        else if (offset == 3){
             carouselCardWrapper.current.style.transform = 'scale(0.75)';
             carouselCardWrapper.current.style.zIndex = '-1';
             carouselCardWrapper.current.style.opacity = '0';
        } else if (offset == 4){
             carouselCardWrapper.current.style.transform = 'scale(0.75)';
             carouselCardWrapper.current.style.zIndex = '-1';
             carouselCardWrapper.current.style.opacity = '0';
             carouselCardWrapper.current.style.left = `${-(parentWidth.current/total_cards)}px`
        }

        if(offset == 2){
            carouselCardWrapper.current.classList.add("fade-right")
        }  
        else if (offset == 0){
            carouselCardWrapper.current.classList.add("fade-left")
        }
        else {
            carouselCardWrapper.current.classList.remove("fade-right")
            carouselCardWrapper.current.classList.remove("fade-left")
        }

        // console.log("card ", offset, ": ", `${((parentWidth.current)/shown_cards) * offset}px`)

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