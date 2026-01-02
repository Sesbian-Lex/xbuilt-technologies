import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

function AnimatedLogoModel({progress}){

    const { scene, animations } = useGLTF('/AnimatedLogo.glb') //import
    const { actions, mixer } = useAnimations(animations, scene) //controlling blender animations
    const count = useRef(0);

    //loading the animations
    useEffect(() => {
        Object.values(actions).forEach(action => {
            action.play()
            // action.paused = true
        })
    }, [actions]) 

    //controlling
    useFrame(() => {
        if (!mixer) return//stop if mixer is not yet loaded

        //plays initial animation up to 34 frames
        if (count.current < 35){
                //current frame devided max frame to get percentage, multiply by 6 seconds
                mixer.setTime((count.current/144)*6)
                count.current++;
            }
        //else statement for scrubbing after the initial animation
        else {
            mixer.setTime(progress*6)
            // console.log(progress*6)  
        }
    })

    return <primitive object={scene} position={[0, -2.5, 0]} />
}

export default AnimatedLogoModel
