import { useRef, useEffect } from 'react'

function ScrollBar({showBar, setShowBar}){
  const scrollBarRef = useRef();

  //scrollBar Implementation
  useEffect(() => {

    let isTicking = false

    const handleScroll3 = () => {


            if (!isTicking) {

            window.requestAnimationFrame(() => {

                  //to subtract to the document height
                  const windowHeight = window.innerHeight;
                  const docHeight = document.documentElement.scrollHeight;
                  
                  document.addEventListener('scroll', (e)=>{
                    const currentScroll = window.scrollY;

                    // console.log((currentScroll/(docHeight-windowHeight))*100)

                    scrollBarRef.current.style.width = `${(currentScroll/(docHeight-windowHeight))*100}vw`

                    // console.log(currentScroll > windowHeight * 3)

                    if (currentScroll > windowHeight * 3) {
                      setShowBar(true)
                    }
                    else setShowBar(false)

                  })

                isTicking = false;
            });

            isTicking = true;
            }

        };

        window.addEventListener("scroll", handleScroll3);


        return () => {
            window.removeEventListener("scroll", handleScroll3);
        };

    }, []);

  return(<div className='scroll-bar' ref={scrollBarRef} style={{ zIndex: 100}}></div>)
}

export default ScrollBar