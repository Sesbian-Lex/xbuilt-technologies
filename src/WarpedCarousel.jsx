import { useRef, useEffect } from 'react'
import './WarpedCarousel.css'
import * as THREE from 'three'

function WarpedCarousel(){
  const canvas2 = useRef();
  //threeJS references
  const sceneRef2 = useRef();
  const cameraRef2 = useRef();
  const rendererRef2 = useRef();
  //services
  const serviceRef1 = useRef();
  const serviceRef2 = useRef();
  const serviceRef3 = useRef();

  
  useEffect(()=>{
    //canvas
    const canvas = canvas2.current;
    if(!canvas) return;
    // const height = canvas.height;
    // const width = canvas.width;
    // console.log(width,'/',height)

    //scene
    const scene2 = new THREE.Scene();
    sceneRef2.current = scene2;
    
    //camera
    const camera = new THREE.PerspectiveCamera( 75, 16/9, 0.1, 1000);
    camera.position.z = 30;
    cameraRef2.current = camera;
    
    //renderer
    const renderer2 = new THREE.WebGLRenderer({
      canvas : canvas,
      alpha: false
    });
    renderer2.setSize(canvas2.current.clientWidth, canvas2.current.clientHeight);
    rendererRef2.current = renderer2;

    //box geometry
    const geometry = new THREE.BoxGeometry( 15, 15, 15 );
    const material = new THREE.MeshBasicMaterial( {
        color: 0xffff00, 
        // side: THREE.DoubleSide,
        wireframe: true
     } );
    const plane = new THREE.Mesh( geometry, material );
    serviceRef1.current = plane;

    //box geometry
    const geometry2 = new THREE.BoxGeometry( 15, 15, 15 );
    const material2 = new THREE.MeshBasicMaterial( {
        color: 0xffff00, 
        // side: THREE.DoubleSide,
        wireframe: true
     } );
    const plane2 = new THREE.Mesh( geometry2, material2 );
    plane2.position.x = -26;
    plane2.rotation.y = 1.0400000000000003;
    plane2.position.z = 10;
    serviceRef2.current = plane2;




    sceneRef2.current.add( plane, plane2);

    rendererRef2.current.render(sceneRef2.current, cameraRef2.current)

    serviceRef1.current.position.x = 0;
    serviceRef1.current.rotation.y = 0;

    // sphere.position.x = -30;
    rendererRef2.current.render(sceneRef2.current, cameraRef2.current)


  },[])

  useEffect(()=>{
    canvas2.current.addEventListener('wheel', handleCarousel)

    function handleCarousel(e){
        e.preventDefault();
        // console.log(e.deltaY)
        const movement = e.deltaY > 0 ? -1 : 1;
        // console.log(movement)
        serviceRef1.current.position.x += movement  ;
        serviceRef1.current.rotation.y -= (movement/25);

        if(serviceRef1.current.position.x < 0 ) serviceRef1.current.position.z += (-movement/2.5);
        else serviceRef1.current.position.z += (movement/2.5);
        
        console.log(serviceRef1.current.position.x,' --- ' ,serviceRef1.current.rotation.y, ' --- ',serviceRef1.current.position.z)
        rendererRef2.current.render(sceneRef2.current, cameraRef2.current);
        // canvas2.current.removeEventListener('wheel', handleCarousel);

        //if on the rightmost, transfer to left
        if(serviceRef1.current.position.x > 36){
            serviceRef1.current.position.x = -36;
            serviceRef1.current.rotation.y = 1.4400000000000006;
            serviceRef1.current.position.z = -14.400000000000007;

        }
        //if on the leftmost, transfer to right
        if(serviceRef1.current.position.x < -36){
            serviceRef1.current.position.x = 36;
            serviceRef1.current.rotation.y = -1.4400000000000006;
            serviceRef1.current.position.z = 14.400000000000007;
        }
    }
  },[])

    return(<canvas id='canvas2' ref={canvas2}></canvas>)
}

export default WarpedCarousel