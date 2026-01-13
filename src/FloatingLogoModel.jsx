import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useMemo } from 'react'
import { SkeletonUtils } from 'three-stdlib'

function FloatingLogoModel() {
  const { scene, animations } = useGLTF('/FloatingAnimation.glb')

  // 🔑 clone the scene so each instance is unique
  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene])

  const { actions } = useAnimations(animations, clonedScene)

  useEffect(() => {
    Object.values(actions).forEach(action => {
      action.play()
    })
  }, [actions])

  return <primitive object={clonedScene} position={[0, -2.5, 0]} />
}

export default FloatingLogoModel
