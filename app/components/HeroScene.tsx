'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Cityscape() {
  const cityRef = useRef<THREE.Group>(null)
  const buildings = Array.from({ length: 50 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() * 2) + 1,
      (Math.random() - 0.5) * 20
    ],
    scale: [
      Math.random() * 0.5 + 0.5,
      Math.random() * 3 + 2,
      Math.random() * 0.5 + 0.5
    ]
  }))

  useFrame(({ clock }) => {
    if (cityRef.current) {
      cityRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3 - 3
      cityRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={cityRef} position={[0, -3, 0]}>
      {buildings.map((building, index) => (
        <mesh key={index} position={building.position as [number, number, number]}>
          <boxGeometry args={building.scale as [number, number, number]} />
          <meshStandardMaterial wireframe color="#4a9eff" />
        </mesh>
      ))}
      <Grid
        position={[0, -0.5, 0]}
        args={[50, 50]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#4a9eff"
        sectionSize={5}
        fadeStrength={1}
        fadeDistance={50}
      />
    </group>
  )
}

export default function HeroScene() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 5, 15], fov: 60 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={['#000', 5, 30]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Cityscape />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
