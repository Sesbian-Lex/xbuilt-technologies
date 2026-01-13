import './DisappearingTitle.css'
import {useState, useRef, useEffect } from 'react'
import LogoCards from './LogoCards.jsx'

function DisappearingTitle({progress}){
    const titleWrapper = useRef();
    const titleWrapper2 = useRef();
    let colorProgress = 0;
    const minProg = 0.26;
    const maxProg = 0.95;

    useEffect(()=>{
        // console.log(progress)
        colorProgress = (progress - minProg) / (maxProg - minProg); //gets the percentatge
        if (colorProgress > 0.98) colorProgress = 0.98;
        // console.log((colorProgress*99)/100)
        titleWrapper.current.style.setProperty('--progress', `${(colorProgress*99)/100}`)
        titleWrapper2.current.style.setProperty('--progress', `${(colorProgress*99)/100}`)

    },[progress])

    return(
        <>
            <div className='title-wrapper disappear' ref={titleWrapper}>
                <h1 className='page-title slide-up-fade-in title-size'>
                    <span>Turn Your Website</span> 
                    <br/>
                    <span>into a Sales Weapon</span>
                </h1>
                <h2 className='sub-title slide-up-fade-in'>We build custom websites and funnels that attract your ideal
                clients, automate sales, and turn leads into paying customers</h2>
            </div>
            <div className='title-wrapper appear' ref={titleWrapper2}>
                <h1 className='title-gradient title-size'>
                    <span>WHY WORK WITH US</span> 
                </h1>
                <h2 className='sub-title'>Sounds Familliar?</h2>

                <div className='why-card-wrapper'>

                    <div className='why-card-wrapper-squared'>
                        <div className='why-card'>
                            <h1 style={{textAlign:'left'}} className='title-gradient'>01</h1>
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
                            <h1 style={{textAlign:'left'}} className='title-gradient'>02</h1>
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
                            <h1 style={{textAlign:'left'}} className='title-gradient'>03</h1>
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
                            <h1 style={{textAlign:'left'}} className='title-gradient'>04</h1>
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

                <h3 className='sub-title margin-24'>Platforms & Tools We Use</h3>

                <LogoCards/>


            </div>

        </>
        
    )
}

export default DisappearingTitle