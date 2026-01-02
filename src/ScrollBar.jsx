import { useRef, useEffect } from 'react'

function ScrollBar(){
  const scrollBarRef = useRef();

  //scrollBar Implementation
  useEffect(() => {
    //to subtract to the document height
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    
    document.addEventListener('scroll', (e)=>{
      const currentScroll = window.scrollY;

      // console.log((currentScroll/(docHeight-windowHeight))*100)

      scrollBarRef.current.style.width = `${(currentScroll/(docHeight-windowHeight))*100}vw`

    })
  })

  return(<div className='scroll-bar' ref={scrollBarRef} style={{ zIndex: 100}}></div>)
}

export default ScrollBar