'use client'
import * as THREE from "three"
import {Canvas} from "@react-three/fiber"
import { ContactShadows, Float, Environment} from "@react-three/drei"
import {Suspense, useEffect, useRef, useState} from 'react'
import {gsap} from "gsap"


export default function Floatshapes() {
  return (
    <div>
        <Canvas className="z-0" shadows gl={{antialias: false}} dpr={[1, 1.5]} camera={{position: [0,0,25], fov:30, near: 1, far: 40}}>
            <Suspense fallback={null}>
                <Geometries/>
                <ContactShadows position={[0, -3.5, 0]} opacity={0.65} scale={40} blur={1} far={3}/>
                <Environment preset = "apartment"/>
            </Suspense>
        </Canvas>
    </div>
  )
}

function Geometries(){
    const geometries = [
        {
            position: [0,0,0],
            r: 0.2,
            geometry: new THREE.IcosahedronGeometry(12)
        }
    ]

    const materials = [
        new THREE.MeshNormalMaterial({ color: 0xf100230 })
    ]

    // geometry will render a single mesh to its material
    return geometries.map(({position, r, geometry}) => (
        <CreateGeometry
        key={JSON.stringify(position)}
        position = {position.map((p) => p*2)}
        geometry = {geometry}
        materials = {materials}
        r = {r}
        />
    ));
}

function CreateGeometry({r, position, geometry, materials}){
    const meshRef = useRef()
    const [visible, setVisible] = useState(true)
    const startingMaterial = getMaterial()
    function getMaterial(){
        return gsap.utils.random(materials)
    }
    return (
    <group position={position} ref={meshRef}>
        <Float speed={15*r} rotationIntensity={6*r} floatIntensity={5*r}>
            <mesh
                geometry={geometry}
                visible={visible}
                material={startingMaterial}
            />
        </Float>
    </group>
    );

}

