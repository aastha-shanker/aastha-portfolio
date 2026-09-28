import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function DigitalCore() {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.y -= delta * 0.7
    groupRef.current.rotation.x += delta * 0.35

    const pulse =
      1 + Math.sin(state.clock.elapsedTime * 3) * 0.12

    groupRef.current.scale.setScalar(pulse)
  })

  return (
    <group ref={groupRef}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[0.42, 16, 16]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Inner wire sphere */}
      <mesh>
        <sphereGeometry args={[0.55, 10, 10]} />

        <meshBasicMaterial
          color="#67e8f9"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Energy ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.75, 0.018, 8, 48]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Energy ring 2 */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.62, 0.015, 8, 48]} />

        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Energy ring 3 */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[0.5, 0.012, 8, 48]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  )
}
function CoreCube({ exiting }) {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (!groupRef.current) return

    groupRef.current.rotation.x += delta * 0.25
    groupRef.current.rotation.y += delta * 0.4
    groupRef.current.rotation.z += delta * 0.12

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.04

if (exiting) {
  groupRef.current.scale.lerp(
    new THREE.Vector3(2.2, 2.2, 2.2),
    delta * 3
  )
} else {
  groupRef.current.scale.setScalar(pulse)
}
  })

  return (
    <group ref={groupRef}>
       <DigitalCore />
       {/* Internal grid */}
<group rotation={[0, 0, 0]}>
  {Array.from({ length: 5 }).map((_, index) => {
    const offset = (index - 2) * 0.32

    return (
      <group key={index}>
        <mesh position={[offset, 0, 0]}>
          <boxGeometry args={[0.01, 1.8, 1.8]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.08}
          />
        </mesh>

        <mesh position={[0, offset, 0]}>
          <boxGeometry args={[1.8, 0.01, 1.8]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.08}
          />
        </mesh>
      </group>
    )
  })}
</group>
      {/* Outer wireframe cube */}
      <mesh>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Inner cube */}
      <mesh>
        <boxGeometry args={[1.45, 1.45, 1.45]} />
        <meshBasicMaterial
          color="#0e7490"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Core */}
      <mesh>
        <boxGeometry args={[0.7, 0.7, 0.7]} />
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Small internal nodes */}
      {[
        [-0.55, 0.55, 0.55],
        [0.55, 0.55, -0.55],
        [-0.55, -0.55, -0.55],
        [0.55, -0.55, 0.55],
      ].map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
      ))}
    </group>
  )
}

function FloatingObjects({ exiting }) {
  const groupRef = useRef()

  const objects = [
    { position: [-3.4, 1.7, -1], type: 'cube', size: 0.45 },
    { position: [3.2, 1.5, -2], type: 'sphere', size: 0.3 },
    { position: [-3, -1.7, -1.5], type: 'ring', size: 0.5 },
    { position: [3.5, -1.5, -1], type: 'cube', size: 0.35 },
    { position: [1.9, 2.5, -3], type: 'ring', size: 0.3 },
    { position: [-2, 2.7, -2.5], type: 'sphere', size: 0.22 },
  ]

  useFrame((state) => {
    if (!groupRef.current) return

    const elapsed = state.clock.elapsedTime

    const emergence = Math.min(
      Math.max((elapsed - 1.4) / 1.4, 0),
      1
    )

    groupRef.current.children.forEach((group, index) => {
      if (!group) return

      const object = objects[index]

      const angle = index * 1.7

      const startX = Math.sin(angle) * 0.25
      const startY = Math.cos(angle) * 0.25

      const targetX = object.position[0] * emergence
      const targetY = object.position[1] * emergence
      const targetZ = object.position[2] * emergence

      group.position.x = THREE.MathUtils.lerp(
        startX,
        targetX,
        emergence
      )

      group.position.y = THREE.MathUtils.lerp(
        startY,
        targetY,
        emergence
      )

      group.position.z = THREE.MathUtils.lerp(
        0,
        targetZ,
        emergence
      )

      if (exiting) {
        group.position.x *= 1.7
        group.position.y *= 1.7
        group.position.z *= 1.7
      }
    })
  })

  return (
    <group ref={groupRef}>
      {objects.map((object, index) => (
        <Float
          key={index}
          speed={0.7 + index * 0.08}
          rotationIntensity={0.5}
          floatIntensity={0.8}
        >
          <group>
            {object.type === 'cube' && (
              <mesh rotation={[0.4, 0.3, 0.2]}>
                <boxGeometry
                  args={[
                    object.size,
                    object.size,
                    object.size,
                  ]}
                />

                <meshBasicMaterial
                  color="#22d3ee"
                  wireframe
                  transparent
                  opacity={0.45}
                />
              </mesh>
            )}

            {object.type === 'sphere' && (
              <mesh>
                <sphereGeometry
                  args={[object.size, 12, 12]}
                />

                <meshBasicMaterial
                  color="#22d3ee"
                  wireframe
                  transparent
                  opacity={0.4}
                />
              </mesh>
            )}

            {object.type === 'ring' && (
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry
                  args={[
                    object.size,
                    0.025,
                    8,
                    32,
                  ]}
                />

                <meshBasicMaterial
                  color="#67e8f9"
                  transparent
                  opacity={0.45}
                />
              </mesh>
            )}
          </group>
        </Float>
      ))}
    </group>
  )
}

function DigitalParticles() {
  const particlesRef = useRef()

  const particleCount =
  typeof window !== 'undefined' && window.innerWidth < 768
    ? 35
    : 90

const particles = Array.from(
  { length: particleCount },
  (_, index) => ({
    x: (Math.random() - 0.5) * 12,
    y: (Math.random() - 0.5) * 7,
    z: (Math.random() - 0.5) * 8,
    size: Math.random() * 0.025 + 0.008,
    opacity: Math.random() * 0.35 + 0.08,
    key: index,
  }))

  useFrame((state) => {
    if (!particlesRef.current) return

    particlesRef.current.rotation.y =
      state.clock.elapsedTime * 0.015

    particlesRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) * 0.03
  })

  return (
    <group ref={particlesRef}>
      {particles.map((particle) => (
        <mesh
          key={particle.key}
          position={[
            particle.x,
            particle.y,
            particle.z,
          ]}
        >
          <sphereGeometry
            args={[
              particle.size,
              6,
              6,
            ]}
          />
          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={particle.opacity}
          />
        </mesh>
      ))}
    </group>
  )
}

function Scene({ exiting, mouse }) {
  const sceneRef = useRef()

  useFrame((state, delta) => {
    if (!sceneRef.current) return

    const targetX = mouse.current.x * 0.35
    const targetY = mouse.current.y * 0.25

    sceneRef.current.position.x = THREE.MathUtils.lerp(
      sceneRef.current.position.x,
      targetX,
      delta * 2
    )

    sceneRef.current.position.y = THREE.MathUtils.lerp(
      sceneRef.current.position.y,
      targetY,
      delta * 2
    )
  })

  return (
    <group ref={sceneRef}>
      <ambientLight intensity={0.5} />

      <DigitalParticles />

      <CoreCube exiting={exiting} />

      <FloatingObjects exiting={exiting} />
    </group>
  )
}

function LoadingScreen({ onFinish }) {
  const prefersReducedMotion =
  window.matchMedia &&
  window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches
  const [progress, setProgress] = useState(0)
const [exiting, setExiting] = useState(false)
const mouse = useRef({ x: 0, y: 0 })
useEffect(() => {
  const handleMouseMove = (event) => {
  if (window.innerWidth < 768) return
    mouse.current.x =
      (event.clientX / window.innerWidth - 0.5) * 2

    mouse.current.y =
      -(event.clientY / window.innerHeight - 0.5) * 2
  }

  window.addEventListener('mousemove', handleMouseMove)

  return () => {
    window.removeEventListener(
      'mousemove',
      handleMouseMove
    )
  }
}, [])

  useEffect(() => {
    const start = performance.now()
    const duration = prefersReducedMotion
  ? 1200
  : 4000

    let animationFrame

    const updateProgress = (time) => {
      const elapsed = time - start
      const percentage = Math.min(
        (elapsed / duration) * 100,
        100
      )

      setProgress(percentage)

      if (percentage < 100) {
  animationFrame =
    requestAnimationFrame(updateProgress)
} else {
  setExiting(true)

  setTimeout(() => {
    onFinish()
  }, 800)
}
    }

    animationFrame =
      requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div
  className={`fixed inset-0 z-[9999] overflow-hidden bg-[#03070D] text-white transition-all duration-700 ${
    exiting
      ? 'scale-110 opacity-0'
      : 'scale-100 opacity-100'
  }`}
>
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_45%)]" />
      </div>

      {/* 3D scene */}
      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: [0, 0, 7],
            fov: 50,
          }}
          dpr={[1, 1.25]}
          gl={{
            antialias: true,
            alpha: true,
          }}
        >
          <Scene
  exiting={exiting}
  mouse={mouse}
/>
        </Canvas>
      </div>

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-[70px]" />

      {/* Loading information */}
      <div className="absolute bottom-[13%] left-1/2 flex w-[min(520px,82vw)] -translate-x-1/2 flex-col items-center">
        <p className="mb-4 text-center font-['Space_Grotesk'] text-[10px] font-medium uppercase tracking-[0.32em] text-cyan-300/80 sm:text-xs">
          Directing you to Aastha&apos;s digital world
        </p>

        <div className="relative h-[1px] w-full overflow-hidden bg-white/10">
          <div
            className="absolute left-0 top-0 h-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="mt-3 flex w-full justify-between font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.2em] text-white/30">
          <span>Initializing</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen