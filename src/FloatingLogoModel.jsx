import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'

function FloatingLogoModel({}){

    const { scene, animations } = useGLTF('/FloatingAnimation.glb') //import
    const { actions, mixer } = useAnimations(animations, scene) //controls

    //play all animations
    useEffect(() => {
        Object.values(actions).forEach(action => {
            action.play() 
            // action.paused = true
        })
    }, [actions]) 


    return <primitive object={scene} position={[0, -2.5, 0]} />
}

export default FloatingLogoModel