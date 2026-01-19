import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function AnimatedLogoModel({ progress }) {
    const { scene, animations } = useGLTF('/twoEightEight.glb')
    const { actions, mixer } = useAnimations(animations, scene)

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

    useFrame((_, delta) => {
        if (!mixer) return

        // Initial intro animation (frame-based)
        if (count.current < INITIAL_FRAMES) {
            currentTime.current = (count.current / TOTAL_FRAMES) * DURATION
            mixer.setTime(currentTime.current)
            count.current++
            return
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

    return <primitive object={scene} position={[0, -2.5, 0]} />
}

export default AnimatedLogoModel
