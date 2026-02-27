import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Float } from '@react-three/drei';
import * as THREE from 'three'
import './HomeCanvas.css'

function AnimatedLogoModel({ progress }) {
    const { scene, animations } = useGLTF('/twoEightEight.glb')
    const { scene: scene2, animations: animations2 } = useGLTF('/noAnimation.glb')
    const { actions, mixer } = useAnimations(animations, scene)

    const [animationDoneState, setAnimationDoneState] = useState(false)

    const box1 = scene2.getObjectByName('box1')
    const box2 = scene2.getObjectByName('box2')
    const box3 = scene2.getObjectByName('box3')
    const box4 = scene2.getObjectByName('box4')

    const count = useRef(0)
    const currentTime = useRef(0)

    const DURATION = 12 // seconds
    const INITIAL_FRAMES = 72
    const TOTAL_FRAMES = 288

    useEffect(() => {
        Object.values(actions).forEach(action => {
            action.play()
            // action.paused = true // IMPORTANT
        })
    }, [actions])

    useEffect(()=>{
        setAnimationDoneState(false)
    },[])

    useFrame((_, delta) => {
        if (!mixer) return

        // Initial intro animation (frame-based)
        if (count.current < INITIAL_FRAMES) {
            currentTime.current = (count.current / TOTAL_FRAMES) * DURATION
            mixer.setTime(currentTime.current)
            count.current++
            return
        } else {
            setAnimationDoneState(true)
        }

        // Target time from progress
        const targetTime = THREE.MathUtils.clamp(progress, 0, 1) * DURATION

        // Smoothly move toward target
        currentTime.current = THREE.MathUtils.damp(
            currentTime.current,
            targetTime,
            6,       // responsiveness (higher = snappier)
            delta
        )

        mixer.setTime(currentTime.current)
    })

    const defaultProgress = 0.26;



    return ( 
        (progress == defaultProgress && animationDoneState) ?            
            <group>
                {/* <primitive object={scene} position={[0, -2.5, 0]} />  */}
                <primitive object={scene2} position={[0, -2.5, 0]}/>
                <FloatingBox object={box1} progress={progress} stopAt={0.27} speed={1.1254}/>
                <FloatingBox object={box2} progress={progress} stopAt={0.27} speed={1.9485}/>
                <FloatingBox object={box3} progress={progress} stopAt={0.27} speed={1.6581}/>
                <FloatingBox object={box4} progress={progress} stopAt={0.27} speed={1.8453}/>

            </group> 
            :
            <primitive object={scene} position={[0, -2.5, 0]} />    
    )
}

export default AnimatedLogoModel

function FloatingBox({ object, progress, stopAt, speed }) {
  const baseY = object.position.y

  useFrame((state, delta) => {
    if (progress < stopAt) {
      object.position.y =
        baseY + Math.sin(state.clock.elapsedTime * speed) * 0.075
    } else {
      object.position.y = THREE.MathUtils.damp(
        object.position.y,
        baseY,
        5,
        delta
      )
    }
  })

  return null // IMPORTANT
}
