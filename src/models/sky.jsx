import { useGLTF } from "@react-three/drei";    
import sky from "../assets/3d/sky.glb";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
export function Sky({isRotating, ...props}) {
    const ref = useRef()
    const { scene  } = useGLTF(sky);
    useFrame((_, delta) => {
        if(isRotating)
            ref.current.rotation.y += 0.15 * delta;
        else
            ref.current.rotation.y -= 0.015  * delta;
    });
    return (
        <mesh ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
}