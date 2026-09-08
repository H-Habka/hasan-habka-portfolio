import { useMemo, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import {
  createHullGeometry,
  createStationLines,
  createWaterlineRing,
} from "./hullGeometry"

const deep = new THREE.Color("#071018")
const copper = new THREE.Color("#e07a3d")
const foam = new THREE.Color("#f0a06a")
const hullPaint = new THREE.Color("#b7a48a")
const cameraViews = [
  new THREE.Vector3(0.35, 0.92, 5.1),
  new THREE.Vector3(3.4, 1.45, 3.15),
  new THREE.Vector3(5.15, 0.88, 0.2),
  new THREE.Vector3(0.25, 5.35, 0.15),
]
const cameraTarget = new THREE.Vector3()

function YachtHull({ reduced }) {
  const hull = useMemo(() => createHullGeometry(), [])
  const stations = useMemo(() => createStationLines(), [])
  const waterline = useMemo(() => createWaterlineRing(), [])

  return (
    <group position={[0, -0.08, 0]}>
      <mesh geometry={hull} castShadow>
        <meshStandardMaterial
          color={hullPaint}
          metalness={0.62}
          roughness={0.38}
          envMapIntensity={0.8}
        />
      </mesh>
      <lineSegments geometry={stations}>
        <lineBasicMaterial
          color={copper}
          transparent
          opacity={0.42}
          depthWrite={false}
        />
      </lineSegments>
      <lineSegments geometry={waterline}>
        <lineBasicMaterial color={foam} transparent opacity={0.85} />
      </lineSegments>
      {!reduced && (
        <mesh geometry={hull}>
          <meshBasicMaterial
            color={copper}
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      )}
    </group>
  )
}

function BasinWater({ reduced, mobile }) {
  const material = useRef()
  const segments = mobile ? 48 : 80

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDeep: { value: deep },
      uFoam: { value: foam },
    }),
    []
  )

  useFrame((_, delta) => {
    if (reduced || !material.current) return
    material.current.uniforms.uTime.value += delta
  })

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.18, 0]}>
      <planeGeometry args={[18, 12, segments, Math.round(segments * 0.6)]} />
      <shaderMaterial
        ref={material}
        transparent
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          varying float vLift;
          void main() {
            vUv = uv;
            vec3 p = position;
            float w1 = sin(p.x * 1.15 + uTime * 0.55) * 0.04;
            float w2 = sin(p.y * 1.7 - uTime * 0.72) * 0.028;
            p.z += w1 + w2;
            vLift = w1 + w2;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uDeep;
          uniform vec3 uFoam;
          varying vec2 vUv;
          varying float vLift;
          void main() {
            float foam = smoothstep(-0.02, 0.05, vLift);
            vec3 col = mix(uDeep, uFoam, foam * 0.55);
            float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
            edge *= smoothstep(0.0, 0.16, vUv.y) * smoothstep(1.0, 0.84, vUv.y);
            gl_FragColor = vec4(col, 0.55 * edge);
          }
        `}
      />
    </mesh>
  )
}

function DryDockBlocks() {
  const blocks = [
    [-1.4, -0.22, 0],
    [-0.45, -0.22, 0],
    [0.5, -0.22, 0],
    [1.35, -0.22, 0],
  ]

  return (
    <group>
      {blocks.map((position) => (
        <mesh key={position[0]} position={position}>
          <boxGeometry args={[0.42, 0.16, 0.7]} />
          <meshStandardMaterial
            color="#1b232c"
            roughness={0.86}
            metalness={0.08}
          />
        </mesh>
      ))}
      <gridHelper
        args={[16, 24, "#3a2a22", "#1a222b"]}
        position={[0, -0.3, 0]}
      />
    </group>
  )
}

function StudioLights() {
  return (
    <>
      <hemisphereLight args={["#f3efe6", "#0a0e14", 0.38]} />
      <ambientLight intensity={0.16} />
      <directionalLight
        position={[4.2, 5.2, 2.4]}
        intensity={1.35}
        color="#f0a06a"
        castShadow={false}
      />
      <directionalLight
        position={[-3.6, 2.2, -2.8]}
        intensity={0.55}
        color="#8eb4d4"
      />
      <pointLight position={[0.2, 1.6, 1.8]} intensity={0.55} color="#e07a3d" />
    </>
  )
}

export default function HullStudio({ progressRef, reduced, mobile }) {
  const { camera } = useThree()

  useFrame(() => {
    const progress = progressRef?.current ?? 0
    const t = THREE.MathUtils.clamp(progress, 0, 1)

    const scaled = t * (cameraViews.length - 1)
    const index = Math.min(cameraViews.length - 2, Math.floor(scaled))
    const mix = scaled - index
    cameraTarget.lerpVectors(cameraViews[index], cameraViews[index + 1], mix)
    camera.position.lerp(cameraTarget, reduced ? 1 : 0.08)
    camera.lookAt(0, 0.3, 0)
  })

  return (
    <>
      <StudioLights />
      <fog attach="fog" args={["#0a0e14", 7, 16]} />
      <YachtHull reduced={reduced} />
      <BasinWater reduced={reduced} mobile={mobile} />
      <DryDockBlocks />
    </>
  )
}
