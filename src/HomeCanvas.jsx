import './HomeCanvas.css'
import { useState, useRef, useEffect, Suspense, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import AnimatedLogoModel from './AnimatedLogoModel';



function HomeCanvas({ progress, progressUpdate }){
    const canvas = useRef();
    const config = {passive : false}
    let colorProgress = 0;
    const minProg = 0.26;
    const maxProg = 0.95;
    const scrubbing = useRef(false)

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        if(window.scrollY > 100) {
            progressUpdate(0.955);
            document.addEventListener('wheel', handleWheelProgress)
            return
        
        }
        // console.log(progress)
        //only allow scrubbing if progress is below 0.95 and animation is not yet complete
        if(progress < 0.95) {
            document.addEventListener('wheel', scrollScrub, config)

            return () => {
                document.removeEventListener('wheel', scrollScrub);
            };
        } 
        else {
            //adds a listener if the user gets back to the object
            document.addEventListener('wheel', handleWheelProgress)
        }

    },[progress])

    const handleWheelProgress = useCallback(()=>{
                const currentScroll = window.scrollY;
                // console.log("currrent scroll: ", currentScroll)
                // console.log(progress)
                // console.log(currentScroll < 20 ? '1T' : '1F', progress > 0.94 ? '2T' : '2F')
                if(currentScroll < 20 && progress > 0.94){
                    // console.log(progress)
                    progressUpdate(0.94);
                    document.removeEventListener('wheel', handleWheelProgress)
                }
    })

    useEffect(()=>{
        // console.log(progress)
        colorProgress = (progress - minProg) / (maxProg - minProg); //gets the percentatge
        if(colorProgress > 0.99) colorProgress = 0.99;
        // console.log('colorProgress',(colorProgress))
        canvas.current.style.setProperty('--progress', `${(colorProgress)}`)//limits it to 99% but also dividing again to 100 to return to decimal


    }, [progress])

    const scrollScrub = useCallback(async (e) => {
            e.preventDefault();
            // console.log(scrubbing.current)
            if(scrubbing.current) return;

            scrubbing.current = true

            // if scroll is positive or negative
            // 0.015 is the animation scrub amount, increase for faster scrubbing
            // 0.255, minimum scrubbing, don't scrub less than that to avoid
            //// initial animation 
            if(e.deltaY > 0){
                if(progress + (0.005*4)> 0.96) {
                    scrubbing.current = false
                    // document.removeEventListener('wheel', scrollScrub);

                    return
                }

                e.preventDefault();

                progressUpdate((prev)=> prev + 0.005)
                await delay(12)
                progressUpdate((prev)=> prev + 0.005)
                await delay(12)
                progressUpdate((prev)=> prev + 0.005)
                await delay(12)
                progressUpdate((prev)=> prev + 0.005)
                await delay(12)
                progressUpdate((prev)=> prev + 0.005)
                await delay(12)
                progressUpdate((prev)=> prev + 0.005)
                await delay(12)
                progressUpdate((prev)=> prev + 0.005)
                await delay(12)
                progressUpdate((prev)=> prev + 0.005)
                await delay(12)
                progressUpdate((prev)=> prev + 0.005)
                scrubbing.current = false

            } else if(e.deltaY < 0){
                e.preventDefault();
                if(progress - 0.015 < minProg){
                    scrubbing.current = false
                    return
                } else {
                    progressUpdate((prev)=> prev - 0.005)
                    await delay(12)
                    progressUpdate((prev)=> prev - 0.005)
                    await delay(12)
                    progressUpdate((prev)=> prev - 0.005)
                    await delay(12)
                    progressUpdate((prev)=> prev - 0.005)
                    await delay(12)
                    progressUpdate((prev)=> prev - 0.005)
                    await delay(12)
                    progressUpdate((prev)=> prev - 0.005)
                    await delay(12)
                    progressUpdate((prev)=> prev - 0.005)
                    await delay(12)
                    progressUpdate((prev)=> prev - 0.005)
                    await delay(12)
                    progressUpdate((prev)=> prev - 0.005)
                    
                    scrubbing.current = false

                }
            } 
        }
    )

    return(
        <div ref={canvas} 
            className='animated-logo'>

            <Canvas 
                camera={{ position: [0, 0, 12.5], fov: 30
                }}>    

                <Suspense fallback={null}>

                    <directionalLight intensity={2} position={[0, 10, 0]} castShadow/>
                    <pointLight position={[-10, -10, -2]} intensity={50} />
                    <pointLight position={[0, 0, 10]} intensity={90} />

                    <AnimatedLogoModel progress={progress}/>

                </Suspense>

            </Canvas>

        </div>
    )
}

export default HomeCanvas