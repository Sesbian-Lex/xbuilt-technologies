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
    // const [left1, setLeft1] = useState(75);
    // const [top1, setTop1] = useState(28);
    // const [left2, setLeft2] = useState(66);
    // const [top2, setTop2] = useState(40);
    // const [left3, setLeft3] = useState(79);
    // const [top3, setTop3] = useState(44);
    // const [left4, setLeft4] = useState(70);
    // const [top4, setTop4] = useState(55);

      useEffect(() => {

        let isTicking = false

        const handleScroll2 = () => {


            if (!isTicking) {

            window.requestAnimationFrame(() => {

            const tempTop = grandParentRef.current.getBoundingClientRect().top
            const viewHeight = window.innerHeight

            if(tempTop < 0 && tempTop > -viewHeight*1.5){
                const tempProg = tempTop / (-viewHeight*1.5)
                // console.log("triggerd")
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
                <div className='sticky-part'>
                    <div className='moving-samples-wrapper' ref={parentRef}>
                        <h1 className='title-gradient title-size moving-samples-title'>OUR DESIGN PORTFOLIO</h1>
                        <h2 className='moving-samples-text'>Explore our portfolio to see how we turn ideas intor high-performance websites, funnels, and systems that deliver real results for our clients</h2>
                        <MovingSampleCard img={Img1} title={title1} text={text1} id='homirx' progress2={progress2}/>
                        <MovingSampleCard img={Img2} title={title2} text={text2} id='timothy' progress2={progress2}/>
                        <MovingSampleCard img={Img3} title={title3} text={text3} id='sultin' progress2={progress2}/>
                        <MovingSampleCard img={Img4} title={title4} text={text4} id='alexi' progress2={progress2}/>
                        <img src={TornPaper} className='torn-paper'/>
                    </div>  
                </div>
  
            </div>
        </Suspense>


    )
}

export default MovingSamples