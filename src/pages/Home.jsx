import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '../components'
import { Island } from '../models/island'
import {useState,Suspense} from 'react'
import Bird from '../models/bird'
import { Sky } from '../models/sky'
import Plane from '../models/plane'
import HomeInfo from '../components/homeinfo'

export default function Home() {



  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [0,-6.5,-43]
    let rotation = [0.1,4.7,0]
    if(window.innerWidth < 768){
      screenScale = [0.9,0.9,0.9]
    }
    else {
      screenScale = [1, 1,1]
    }
    return [screenScale, screenPosition, rotation]
  }
  const adjustPlaneForScreenSize = () => {
    let screenScale , screenPosition;
    if(window.innerWidth < 768){
      screenScale = [1.5,1.5,1.5]
      screenPosition = [0,-1.5,0]
    }
    else {
      screenScale = [3, 3,3]
      screenPosition = [0,-4,-4]
    }
    return [screenScale, screenPosition]
  }
const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
const [planeScale, planePosition] = adjustPlaneForScreenSize()
  return (
    <section className="w-full h-screen relative">
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{ near: 0.1, far: 1000 }}
      > 
       <Suspense fallback={<Loader />}>
       <directionalLight intensity={1} position={[10, 1, 1]}/>
       <ambientLight/>
       <pointLight/>
       <spotLight/>
       <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
       <Bird isRotating={isRotating}/> 
       <Sky isRotating={isRotating}/> 
        <Island 
       scale={islandScale} 
       position={islandPosition} 
       rotation={islandRotation} 
       isRotating={isRotating}
       setIsRotating={setIsRotating}
       setCurrentStage={setCurrentStage}
       /> 
        <Plane 
        scale={planeScale} 
        position={planePosition} 
        isRotating ={ isRotating }
        rotation={[0,20 ,0]}
        />
       </Suspense>
      </Canvas>
      <div className="absolute inset-0 z-10 pointer-events-none">
        {currentStage != null && <HomeInfo activeIndex={currentStage} />}
      </div>
    </section>

  )
}
