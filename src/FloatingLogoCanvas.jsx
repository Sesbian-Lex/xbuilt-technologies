import './FloatingLogoCanvas.css'
import { useState, useRef, useEffect, Suspense, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import FloatingLogoModel from './FloatingLogoModel'

function FloatingLogoCanvas(){
    //set up the lighting in this file


    return(
        <div className='floating-logo'>

            <Canvas 
                camera={{ position: [0, 0, 12.5], fov: 30
                }}>    

                <Suspense fallback={null}>

                    <directionalLight intensity={2} position={[0, 10, 0]} castShadow/>
                    <pointLight position={[-10, -10, -2]} intensity={50} />
                    <pointLight position={[0, 0, 10]} intensity={90} />

                    <FloatingLogoModel/>

                </Suspense>

            </Canvas>

        </div>
    )
}

export default FloatingLogoCanvas