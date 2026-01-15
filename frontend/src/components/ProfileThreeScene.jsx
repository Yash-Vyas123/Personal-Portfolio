import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const ProfileThreeScene = () => {
    const meshRef = useRef()
    const particlesRef = useRef()

    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.y = time * 0.2
            meshRef.current.rotation.x = time * 0.1
        }
    })

    return (
        <group>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1.5} color="#00F5FF" />
            <pointLight position={[-5, -5, -5]} intensity={1} color="#7000FF" />

            <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
                {/* Main Crystal Shape */}
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <MeshDistortMaterial
                        color="#00F5FF"
                        speed={4}
                        distort={0.3}
                        radius={1}
                        emissive="#00F5FF"
                        emissiveIntensity={0.2}
                    />
                </mesh>

                {/* Outer Wireframe */}
                <mesh scale={1.1}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshBasicMaterial color="#7000FF" wireframe transparent opacity={0.2} />
                </mesh>
            </Float>

            {/* Subtle Particles */}
            <group ref={particlesRef}>
                {Array.from({ length: 30 }).map((_, i) => (
                    <Sphere
                        key={i}
                        args={[0.03, 8, 8]}
                        position={[
                            (Math.random() - 0.5) * 6,
                            (Math.random() - 0.5) * 6,
                            (Math.random() - 0.5) * 6
                        ]}
                    >
                        <meshBasicMaterial
                            color={i % 2 === 0 ? "#00F5FF" : "#FF007A"}
                            transparent
                            opacity={0.3}
                        />
                    </Sphere>
                ))}
            </group>
        </group>
    )
}

export default ProfileThreeScene
