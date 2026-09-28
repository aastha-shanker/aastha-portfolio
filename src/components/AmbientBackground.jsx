import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

function MovingCube({
  startX,
  startY,
  startZ,
  scale,
  speed,
  amplitudeX,
  amplitudeY,
  phase,
  opacity,
}) {
  const ref = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    if (!ref.current) return

    const t = state.clock.elapsedTime

    const isMobile = viewport.width < 6
    const isTablet = viewport.width >= 6 && viewport.width < 9

    const positionMultiplier = isMobile
      ? 0.55
      : isTablet
        ? 0.75
        : 1

    const verticalMultiplier = isMobile
      ? 0.65
      : isTablet
        ? 0.85
        : 1

    ref.current.position.x =
      startX * positionMultiplier +
      Math.sin(t * speed + phase) *
        amplitudeX *
        positionMultiplier

    ref.current.position.y =
      startY * verticalMultiplier +
      Math.sin(t * speed * 0.65 + phase) *
        amplitudeY *
        verticalMultiplier

    ref.current.rotation.x += 0.0003
    ref.current.rotation.y += 0.0007
    ref.current.rotation.z += 0.0001
  })

  const isMobile = viewport.width < 6
  const isTablet = viewport.width >= 6 && viewport.width < 9

  const sizeMultiplier = isMobile
    ? 0.58
    : isTablet
      ? 0.78
      : 1

  return (
    <mesh
      ref={ref}
      position={[startX, startY, startZ]}
      scale={scale * sizeMultiplier}
    >
      <boxGeometry args={[1, 1, 1]} />

      <meshBasicMaterial
        color="#22d3ee"
        wireframe
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </mesh>
  )
}

function GiantTorus() {
  const ref = useRef()
  const { viewport } = useThree()

  const isMobile = viewport.width < 6
  const isTablet = viewport.width >= 6 && viewport.width < 9

  const positionMultiplier = isMobile
    ? 0.55
    : isTablet
      ? 0.75
      : 1

  const sizeMultiplier = isMobile
    ? 0.55
    : isTablet
      ? 0.75
      : 1

  useFrame((state) => {
    if (!ref.current) return

    const t = state.clock.elapsedTime

    ref.current.position.x =
      30 * positionMultiplier +
      Math.sin(t * 0.035) *
        10 *
        positionMultiplier

    ref.current.position.y =
      -4 * positionMultiplier +
      Math.sin(t * 0.025) *
        4 *
        positionMultiplier

    ref.current.rotation.x += 0.0012
    ref.current.rotation.y += 0.0025
  })

  return (
    <mesh
      ref={ref}
      position={[
        30 * positionMultiplier,
        -4 * positionMultiplier,
        -45,
      ]}
      scale={13 * sizeMultiplier}
    >
      <torusGeometry args={[1, 0.18, 12, 48]} />

      <meshBasicMaterial
        color="#22d3ee"
        wireframe
        transparent
        opacity={0.045}
        depthWrite={false}
      />
    </mesh>
  )
}

export default function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.25]}
        camera={{
          position: [0, 0, 15],
          fov: 60,
        }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >

        {/* TOP LEFT */}
        <MovingCube
          startX={-28}
          startY={9}
          startZ={-38}
          scale={8}
          speed={0.55}
          amplitudeX={14}
          amplitudeY={3}
          phase={0}
          opacity={0.07}
        />

        {/* TOP RIGHT */}
        <MovingCube
          startX={27}
          startY={7}
          startZ={-45}
          scale={6.5}
          speed={0.55}
          amplitudeX={12}
          amplitudeY={4}
          phase={2}
          opacity={0.055}
        />

        {/* BOTTOM LEFT */}
        <MovingCube
          startX={-25}
          startY={-9}
          startZ={-42}
          scale={7}
          speed={0.56}
          amplitudeX={17}
          amplitudeY={2.5}
          phase={4}
          opacity={0.05}
        />

        {/* BOTTOM RIGHT */}
        <MovingCube
          startX={25}
          startY={-10}
          startZ={-50}
          scale={5.5}
          speed={0.55}
          amplitudeX={15}
          amplitudeY={3}
          phase={1}
          opacity={0.04}
        />

        <GiantTorus />

      </Canvas>
    </div>
  )
}