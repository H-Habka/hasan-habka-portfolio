import * as THREE from "three"

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function halfBreadth(u, v) {
  const station = Math.pow(Math.sin(Math.PI * clamp(u, 0, 1)), 0.78)
  const rise = Math.pow(clamp(v, 0, 1), 0.52)
  const flare = 1 + 0.2 * v * v
  const entrance = 1 - 0.46 * Math.pow(u, 2.15)
  const transomFill = u < 0.1 ? 0.62 + 3.8 * u : 1
  return station * rise * flare * entrance * transomFill
}

function sheer(u) {
  return 0.8 + 0.2 * Math.pow(2 * u - 1, 2)
}

function keelRocker(u) {
  return 0.035 * Math.pow(2 * u - 1, 2)
}

function hullPoint(u, v, length, beam, depth) {
  const x = (u - 0.5) * length
  const y = keelRocker(u) * depth + v * sheer(u) * depth
  const z = halfBreadth(u, v) * (beam / 2)
  return [x, y, z]
}

export function createHullGeometry({
  length = 4.35,
  beam = 1.08,
  depth = 0.78,
  stations = 36,
  waterlines = 16,
} = {}) {
  const positions = []
  const uvs = []

  const pushPoint = (u, v, side) => {
    const [x, y, z] = hullPoint(u, v, length, beam, depth)
    positions.push(x, y, z * side)
    uvs.push(u, v)
  }

  const addGrid = (side) => {
    const start = positions.length / 3
    for (let i = 0; i <= stations; i += 1) {
      const u = i / stations
      for (let j = 0; j <= waterlines; j += 1) {
        pushPoint(u, j / waterlines, side)
      }
    }

    const cols = waterlines + 1
    const indices = []
    for (let i = 0; i < stations; i += 1) {
      for (let j = 0; j < waterlines; j += 1) {
        const a = start + i * cols + j
        const b = a + cols
        const c = a + 1
        const d = b + 1
        if (side > 0) {
          indices.push(a, b, c, b, d, c)
        } else {
          indices.push(a, c, b, b, c, d)
        }
      }
    }
    return indices
  }

  const indices = [...addGrid(1), ...addGrid(-1)]

  const deckStart = positions.length / 3
  for (let i = 0; i <= stations; i += 1) {
    const u = i / stations
    const [x, y, z] = hullPoint(u, 1, length, beam, depth)
    positions.push(x, y + 0.012, z)
    positions.push(x, y + 0.012, -z)
    uvs.push(u, 1, u, 0)
  }
  for (let i = 0; i < stations; i += 1) {
    const a = deckStart + i * 2
    const b = a + 1
    const c = a + 2
    const d = a + 3
    indices.push(a, c, b, b, c, d)
  }

  const transomStart = positions.length / 3
  for (let j = 0; j <= waterlines; j += 1) {
    const v = j / waterlines
    const [x, y, z] = hullPoint(0, v, length, beam, depth)
    positions.push(x, y, z)
    positions.push(x, y, -z)
    uvs.push(0, v, 1, v)
  }
  for (let j = 0; j < waterlines; j += 1) {
    const a = transomStart + j * 2
    const b = a + 1
    const c = a + 2
    const d = a + 3
    indices.push(a, c, b, b, c, d)
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  )
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()
  return geometry
}

export function createStationLines({
  length = 4.35,
  beam = 1.08,
  depth = 0.78,
  stations = 11,
  samples = 24,
} = {}) {
  const positions = []
  for (let i = 0; i <= stations; i += 1) {
    const u = i / stations
    for (let side of [1, -1]) {
      for (let j = 0; j < samples; j += 1) {
        const v0 = j / (samples - 1)
        const v1 = (j + 1) / (samples - 1)
        const a = hullPoint(u, v0, length, beam, depth)
        const b = hullPoint(u, v1, length, beam, depth)
        positions.push(a[0], a[1], a[2] * side, b[0], b[1], b[2] * side)
      }
    }
  }

  for (let j = 0; j < 4; j += 1) {
    const v = 0.18 + j * 0.22
    for (let i = 0; i < 40; i += 1) {
      const u0 = i / 40
      const u1 = (i + 1) / 40
      const a = hullPoint(u0, v, length, beam, depth)
      const b = hullPoint(u1, v, length, beam, depth)
      positions.push(a[0], a[1], a[2], b[0], b[1], b[2])
      positions.push(a[0], a[1], -a[2], b[0], b[1], -b[2])
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  )
  return geometry
}

export function createWaterlineRing({
  length = 4.35,
  beam = 1.08,
  depth = 0.78,
  v = 0.42,
  samples = 64,
} = {}) {
  const positions = []
  for (let i = 0; i < samples; i += 1) {
    const u0 = i / (samples - 1)
    const u1 = (i + 1) / (samples - 1)
    const a = hullPoint(u0, v, length, beam, depth)
    const b = hullPoint(u1, v, length, beam, depth)
    positions.push(a[0], a[1], a[2], b[0], b[1], b[2])
    positions.push(a[0], a[1], -a[2], b[0], b[1], -b[2])
  }
  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  )
  return geometry
}
