import './HomeCanvas.css'
import { useState, useRef, useEffect, Suspense, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import AnimatedLogoModel from './AnimatedLogoModel';
import LogoCards from './LogoCards.jsx'



function HomeCanvas({
     progress, progressUpdate 
    }){
    // const [progress, setProgress] = useState(0.26)
    const canvas = useRef();
    const canvasWrapperRef = useRef();
    const titleWrapperRef = useRef();
     const titleWrapperRef2 = useRef();

     useEffect(()=>{
        if( window.scrollY > window.innerHeight) {
            titleWrapperRef.current.style.setProperty('opacity', `0`)
            titleWrapperRef.current.style.setProperty('display', 'none')
        }
     },[])

    useEffect(() => {

        let isTicking = false

        const handleScroll = () => {

            
            const tempTop = canvasWrapperRef.current.getBoundingClientRect().top;
            const viewHeight = window.innerHeight;

            if (!isTicking) {

            window.requestAnimationFrame(() => {

                if (tempTop < 0 && tempTop > -viewHeight * 1.5) {

                const tempProg = tempTop / (-viewHeight * 1.5);

                progressUpdate(Math.min(1, Math.max(0.26, tempProg)));
                console.log(tempProg)

                canvas.current.style.setProperty(
                    '--progress',
                    `${Math.min(1, Math.max(0, tempProg))}`
                );

                if (tempProg > 0.26 && tempProg < 0.51) {

                    let tempOpacity = 1 - (tempProg - 0.26) / 0.24;

                    if (tempOpacity < 0.3) tempOpacity = 0;

                    titleWrapperRef.current.style.setProperty(
                        'opacity',
                        `${Math.min(1, Math.max(0, tempOpacity))}`
                    );
                }

                if (tempProg < 0.51) {
                    titleWrapperRef.current.style.setProperty('display', 'flex');
                } else {
                    titleWrapperRef.current.style.setProperty('display', 'none');
                }

                if (tempProg > 0.8 && tempProg < 0.99) {

                    let tempOpacity2 = (tempProg - 0.8) / 0.19;

                    if (tempOpacity2 < 0.2) tempOpacity2 = 0;
                    if (tempOpacity2 > 0.98) tempOpacity2 = 1;

                    titleWrapperRef2.current.style.setProperty(
                        'opacity',
                        `${Math.min(1, Math.max(0, tempOpacity2))}`
                    );
                }
            }

                isTicking = false;
            });

            isTicking = true;
        }

        };

        window.addEventListener("scroll", handleScroll);
        console.log("HomeCanvas mounted");


        return () => {
            window.removeEventListener("scroll", handleScroll);
            console.log("HomeCanvas unmounted");
        };

    }, []);




    return(
        <div ref={canvasWrapperRef} className='canvas-wrapper'>

            <div className='title-wrapper' ref={titleWrapperRef}>
                <h1 className='page-title slide-up-fade-in title-size'>
                    <span>Turn Your Website</span> 
                    <br/>
                    <span>into a Sales Weapon</span>
                </h1>
                <h2 className='sub-title slide-up-fade-in'>We build custom websites and funnels that attract your ideal
                clients, automate sales, and turn leads into paying customers</h2>
            </div>

            <div ref={canvas} 
                className='animated-logo'>
                    <div className='will-disappear'>
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
            </div>  

            <div className='title-wrapper-2' ref={titleWrapperRef2}>
                <h1 className='title-gradient title-size'>
                    <span>WHY WORK WITH US</span> 
                </h1>
                <h2 className='sub-title'>Sounds Familliar?</h2>

                <div className='why-card-wrapper'>

                    <div className='why-card-wrapper-squared'>
                        <div className='why-card'>
                            <h1 style={{textAlign:'left'}} >01</h1>
                            <h2>
                            Your website looks great but it doesn’t convert.
                            </h2>
                            <h3>
                                You’ve invested in design, but
                                visitors browse and leave without
                                taking action. Instead of generating
                                leads, your site becomes a digital
                                brochure that doesn’t drive real
                                business results.
                            </h3>
                        </div>
                    </div>
                    <div className='why-card-wrapper-squared'>
                        <div className='why-card'>
                            <h1 style={{textAlign:'left'}} >02</h1>
                            <h2>
                                No Clear Path to Conversion
                            </h2>
                            <h3>
                                Without structured sales pipelines
                                and conversion-focused funnels,
                                prospects get lost or leave before
                                taking action. Your website may
                                look great, but it fails to guide
                                visitors into becoming paying
                                clients.
                            </h3>
                        </div>
                    </div>
                    <div className='why-card-wrapper-squared'>
                        <div className='why-card'>
                            <h1 style={{textAlign:'left'}} >03</h1>
                            <h2>
                                Generic Templates,
                                Weak Brand
                            </h2>
                            <h3>
                                While templates may look
                                professional at first glance, they
                                often fail to reflect your unique
                                brand identity. Visitors notice the
                                sameness, and your business
                                struggles to stand out in a
                                crowded market.
                            </h3>
                        </div>
                    </div>                    

                    <div className='why-card-wrapper-squared'>
                        <div className='why-card'>
                            <h1 style={{textAlign:'left'}} >04</h1>
                            <h2>
                                Your Website Isn’t
                                Driving Growth 
                            </h2>
                            <h3>
                                Many businesses invest in a site or
                                funnel, only to see little to no
                                return. Without systems designed
                                to generate leads, nurture
                                prospects, and close sales, your
                                website becomes just another
                                expense instead of a growth
                                engine.
                            </h3>
                        </div>
                    </div>  








        
                </div>


                <LogoCards/>


            </div>


        </div>

    )
}

export default HomeCanvas