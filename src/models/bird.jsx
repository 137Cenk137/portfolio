import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import bird from '../assets/3d/bird.glb'

const LEFT_BOUND = -15
const RIGHT_BOUND = 15
const FLY_SPEED = 3
const FLY_HEIGHT = 1.5
const FLY_DEPTH = -2

function Bird({ isRotating }) {
  const group = useRef()
  const direction = useRef(1)
  const { scene, animations } = useGLTF(bird)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const action = actions['Take 001']
    if (!action) return

    if (isRotating) {
      action.reset().fadeIn(0.4).play()
    } else {
      action.fadeOut(0.4)
    }
  }, [actions, isRotating])

  useFrame(({ clock }, delta) => {
    if (isRotating) {

        if (!group.current) return

    group.current.position.x += direction.current * FLY_SPEED * delta
    group.current.position.z = FLY_DEPTH + Math.sin(clock.elapsedTime * 1.5) * 0.4

    if (group.current.position.x >= RIGHT_BOUND) {
      group.current.position.x = RIGHT_BOUND
      direction.current = -1
      group.current.rotation.y = Math.PI
    } else if (group.current.position.x <= LEFT_BOUND) {
      group.current.position.x = LEFT_BOUND
      direction.current = 1
      group.current.rotation.y = 0
    }
    }
  })

  return (
    <group
      ref={group}
      position={[LEFT_BOUND, FLY_HEIGHT, FLY_DEPTH]}
      rotation={[0, 0, 0]}
      scale={[0.003, 0.003, 0.003]}
    >
      <primitive object={scene} />
    </group>
  )
}

export default Bird
