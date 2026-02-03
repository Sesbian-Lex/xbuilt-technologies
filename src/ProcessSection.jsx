import './ProcessSection.css'
import ProcessCard from './ProcessCard.jsx'
import { useRef } from 'react'

function ProcessSection(){

    const title1 = "Discovery"
    const text1 = "We look at your data and competitors to find the best way to win."
    const title2 = "Strategy & Onboarding"
    const text2 = "We define the strategy and structure before any work begins. At this stage, you’ll receive access to your private client portal, where all communication, updates, files, and next steps will be organized in one place."
    const title3 = "The Build"
    const text3 = "We design and code your site using high-end visuals for a premium look."
    const title4 = "Launch"
    const text4 = "We launch your site, connect the analytics, and make sure everything works perfectly."

    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()


    return(
        <div className='process-wrapper'>
            <h2>Process</h2>
            <h1>From Idea to Launch</h1>

            

            <div className='process-card-wrapper'>
                <ProcessCard title={title1} text={text1} number='01' ref={ref1}/>
                <ProcessCard title={title2} text={text2} number='02' ref={ref2}/>
                <ProcessCard title={title3} text={text3} number='03' ref={ref3}/>
                <ProcessCard title={title4} text={text4} number='04' ref={ref4}/>
            </div>
        </div>
    )
}

export default ProcessSection