import './MovingSamples.css'
import { useState, useRef, useEffect, Suspense } from 'react'
import MovingSampleCard from './MovingSampleCard'
import Img1 from './assets/temp-img-1.jpg'
import Img2 from './assets/temp-img-2.jpg'
import Img3 from './assets/temp-img-3.jpg'
import Img4 from './assets/temp-img-4.jpg'
import TornPaper from './assets/torn-paper.webp'

function MovingSamples(){
    const [progress2, setProgress2] = useState(0.03)
    const parentRef = useRef();
    const grandParentRef = useRef();
    const [left1, setLeft1] = useState(75);
    const [top1, setTop1] = useState(28);
    const [left2, setLeft2] = useState(66);
    const [top2, setTop2] = useState(40);
    const [left3, setLeft3] = useState(79);
    const [top3, setTop3] = useState(44);
    const [left4, setLeft4] = useState(70);
    const [top4, setTop4] = useState(55);

      useEffect(() => {

        let isTicking = false

        const handleScroll2 = () => {


            if (!isTicking) {

            window.requestAnimationFrame(() => {

            const tempTop = grandParentRef.current.getBoundingClientRect().top
            const viewHeight = window.innerHeight

            if(tempTop < 0 && tempTop > -viewHeight*1.5){
                const tempProg = tempTop / (-viewHeight*1.5)
                console.log(tempProg)
                setProgress2( Math.min(100, Math.max(0, tempProg)))

            }

                isTicking = false;
            });

            isTicking = true;
            }

        };

        window.addEventListener("scroll", handleScroll2);


        return () => {
            window.removeEventListener("scroll", handleScroll2);
        };

    }, []);


    useEffect(()=>{
        parentRef.current.style.setProperty('--progress2', `${Math.min(1 , Math.max(0, progress2))}`)

        if (progress2 - 0.5 < 0) return
        // if the destination is to the left, subtraction
        //if to the right, addition
        //   |tempVar  | initial |progress2 |start|amplify|range|
        const tempLeft1 = 75 - (((progress2 - 0.5) * 2) * (75-30))
        const tempLeft2 = 66 - (((progress2 - 0.5) * 2) * (66-30))
        const tempLeft3 = 79 - (((progress2 - 0.5) * 2) * (79-70))
        const tempLeft4 = 70 + (((progress2 - 0.5) * 2) * (70-70))
        
        const tempTop1 = 28 - (((progress2 - 0.5) * 2) * (28-3))
        const tempTop2 = 40 + (((progress2 - 0.5) * 2) * (53-40))
        const tempTop3 = 44 - (((progress2 - 0.5) * 2) * (44-3))
        const tempTop4 = 55 - (((progress2 - 0.5) * 2) * (55-53))

        setLeft1(tempLeft1)
        setLeft2(tempLeft2)
        setLeft3(tempLeft3)
        setLeft4(tempLeft4)
        setTop1(tempTop1)
        setTop2(tempTop2)
        setTop3(tempTop3)
        setTop4(tempTop4)
    },[progress2])


    //change text here to change the info
    const title1 = "Homirx Landing Page"
    const text1 = "A modern, conversion-focused landing page designed to showcase properties clearly, build trust, and encourage inquiries from potential buyers."
    const title2 = "Timothy Roberts Funnel Page"
    const text2 = "A strategically structured funnel page built to capture leads, communicate value, and guide prospects through a seamless conversion journey."
    const title3 = "Sultin Funnel Page"
    const text3 = "A clean and goal-driven funnel designed to present consulting services with clarity while leading visitors toward the next step with confidence"
    const title4 = "Alexi Landing Page"
    const text4 = "A high-impact landing page crafted to position the brand as credible and professional while driving engagement and action."

    return(
        <Suspense>
            <div className='moving-samples-wrapper-squared' ref={grandParentRef}>
                <div className='moving-samples-wrapper' ref={parentRef}
                
                // ref={(el) => {
                //     parentRef.current = el
                //     sectionRef.current = el
                // }}
                
                >
                    <h1 className='title-gradient title-size moving-samples-title'>OUR DESIGN PORTFOLIO</h1>
                    <h2 className='moving-samples-text'>Explore our portfolio to see how we turn ideas intor high-performance websites, funnels, and systems that deliver real results for our clients</h2>
                    <MovingSampleCard img={Img1} title={title1} text={text1} id='homirx' startingLeft={left1} startingTop={top1} parentRef={parentRef} progress2={progress2}/>
                    <MovingSampleCard img={Img2} title={title2} text={text2} id='timothy' startingLeft={left2} startingTop={top2} parentRef={parentRef} progress2={progress2}/>
                    <MovingSampleCard img={Img3} title={title3} text={text3} id='sultin' startingLeft={left3} startingTop={top3} parentRef={parentRef} progress2={progress2}/>
                    <MovingSampleCard img={Img4} title={title4} text={text4} id='alexi' startingLeft={left4} startingTop={top4} parentRef={parentRef} progress2={progress2}/>
                    <img src={TornPaper} className='torn-paper'/>
                </div>    
            </div>
        </Suspense>


    )
}

export default MovingSamples