import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Points, PointMaterial, Float } from '@react-three/drei'

// A ring of particles
function ParticleRing({ radius, count, color, speed, size, rotationOffset = [0, 0, 0] }) {
    const pointsRef = useRef()

    // Generate points on a circle/ring
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2
            // Add some randomness to the ring width
            const r = radius + (Math.random() - 0.5) * 1.5

            positions[i * 3] = Math.cos(angle) * r
            positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5 // Minimal height variation
            positions[i * 3 + 2] = Math.sin(angle) * r
        }
        return positions
    }, [count, radius])

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * speed * 0.1
            pointsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
        }
    })

    return (
        <group rotation={rotationOffset}>
            <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={color}
                    size={size}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    )
}

// Background "Star" dust
function AmbientDust() {
    const ref = useRef()
    const count = 1500

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 60
            pos[i * 3 + 1] = (Math.random() - 0.5) * 60
            pos[i * 3 + 2] = (Math.random() - 0.5) * 60
        }
        return pos
    }, [])

    useFrame((state, delta) => {
        ref.current.rotation.y -= delta * 0.02
        ref.current.rotation.x += delta * 0.01
    })

    return (
        <Points ref={ref} positions={positions} stride={3}>
            <PointMaterial
                transparent
                color="#555"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.4}
            />
        </Points>
    )
}

const ThreeBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            background: '#050505' // Extremely dark grey, almost black
        }}>
            <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
                {/* Lighting */}
                <ambientLight intensity={0.5} />

                {/* Main Data Rings */}
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    {/* Inner Gold Ring */}
                    <ParticleRing
                        radius={8}
                        count={400}
                        color="#FFD700"
                        speed={1}
                        size={0.06}
                        rotationOffset={[0.5, 0, 0]}
                    />

                    {/* Middle Grey Ring */}
                    <ParticleRing
                        radius={12}
                        count={600}
                        color="#444"
                        speed={-0.8}
                        size={0.05}
                        rotationOffset={[-0.4, 0, 0.2]}
                    />

                    {/* Outer Large Gold Scatter */}
                    <ParticleRing
                        radius={18}
                        count={300}
                        color="#FFD700"
                        speed={0.5}
                        size={0.08}
                        rotationOffset={[0.2, 0, -0.4]}
                    />
                </Float>

                {/* Background Dust */}
                <AmbientDust />

                <fog attach="fog" args={['#050505', 15, 45]} />
            </Canvas>
        </div>
    )
}

export default ThreeBackground
