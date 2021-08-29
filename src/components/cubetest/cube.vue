<template>
  <div id="canvas" class="h-full w-full"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js'

const setupAnimation = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000)
  camera.position.set(10, 10, 10)
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(innerWidth, innerHeight)
  // document.body.appendChild(renderer.domElement)
  document.querySelector('#canvas')?.appendChild(renderer.domElement)

  const labelRenderer = new CSS3DRenderer()
  labelRenderer.setSize(innerWidth, innerHeight)
  labelRenderer.domElement.style.position = 'absolute'
  labelRenderer.domElement.style.top = '0px'
  // document.body.appendChild(labelRenderer.domElement)
  document.querySelector('#canvas')?.appendChild(labelRenderer.domElement)

  const controls = new OrbitControls(camera, labelRenderer.domElement)

  const light = new THREE.DirectionalLight(0xFFFFFF, 1)
  light.position.set(10, 20, 30)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0xFFFFFF, 0.5))

  // scene.add(new THREE.GridHelper(10, 10))

  const box = new THREE.Mesh(new THREE.BoxBufferGeometry(2, 2, 2), new THREE.MeshLambertMaterial({ color: 0x0088FF, wireframe: false }))
  scene.add(box)
  const pivot = new THREE.Group()
  scene.add(pivot)
  pivot.translateX(-2)
  pivot.translateY(-2)
  pivot.translateZ(-2)
  const axesPivot = new THREE.AxesHelper(5)
  pivot.add(axesPivot)

  const pos = new THREE.Vector3(-1, 0, 0)
  const pos2 = new THREE.Vector3(1, 0, 0)
  const pos3 = new THREE.Vector3(0, -1, 0)
  const pos4 = new THREE.Vector3(0, 1, 0)
  const pos5 = new THREE.Vector3(0, 0, 1)
  const pos6 = new THREE.Vector3(0, 0, -1)

  const cNormal = new THREE.Vector3()
  const cPos = new THREE.Vector3()
  const m4 = new THREE.Matrix4()

  const sides: any[] = []

  let sideDiv = document.createElement('sideDiv')
  sideDiv.className = 'label text-red-500'
  const label = new CSS3DObject(sideDiv)
  label.position.copy(pos)
  label.rotation.y = Math.PI * -0.5
  label.scale.set(0.025, 0.025, 1)
  sideDiv.id = 'face1'
  box.add(label)

  sideDiv = document.createElement('sideDiv')
  sideDiv.className = 'label text-red-500'
  const face2 = new CSS3DObject(sideDiv)
  face2.position.copy(pos2)
  face2.rotation.y = Math.PI * 0.5
  face2.scale.set(0.025, 0.025, 1)
  sideDiv.id = 'face2'
  box.add(face2)

  sideDiv = document.createElement('sideDiv')
  sideDiv.className = 'label text-red-500'
  const face3 = new CSS3DObject(sideDiv)
  face3.position.copy(pos3)
  face3.rotation.x = Math.PI * 0.5
  face3.scale.set(0.025, 0.025, 1)
  sideDiv.id = 'face3'
  box.add(face3)

  sideDiv = document.createElement('sideDiv')
  sideDiv.className = 'label text-red-500'
  const face4 = new CSS3DObject(sideDiv)
  face4.position.copy(pos4)
  face4.rotation.x = Math.PI * -0.5
  face4.scale.set(0.025, 0.025, 1)
  sideDiv.id = 'face4'
  box.add(face4)

  sideDiv = document.createElement('sideDiv')
  sideDiv.className = 'label text-red-500'
  const face5 = new CSS3DObject(sideDiv)
  face5.position.copy(pos5)
  face5.scale.set(0.025, 0.025, 1)
  sideDiv.id = 'face5'
  box.add(face5)

  sideDiv = document.createElement('sideDiv')
  sideDiv.className = 'label text-red-500'
  const face6 = new CSS3DObject(sideDiv)
  face6.position.copy(pos6)
  face6.rotation.y = Math.PI
  face6.scale.set(0.025, 0.025, 1)
  sideDiv.id = 'face6'
  box.add(face6)

  sides.push(label, face2, face3, face4, face5, face6)

  window.addEventListener('resize', onWindowResize, false)
  animate()
  function animate() {
    requestAnimationFrame(animate)

    sides.forEach((s) => {
      cNormal.copy(s.position).applyMatrix3(box.normalMatrix)
      cPos.copy(s.position).applyMatrix4(m4.multiplyMatrices(camera.matrixWorldInverse, box.matrixWorld))
      const d = cPos.negate().dot(cNormal)

      s.element.style.visibility = d < 0 ? 'hidden' : 'visible'
    })

    renderer.render(scene, camera)
    labelRenderer.render(scene, camera)
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight

    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)

    labelRenderer.setSize(window.innerWidth, window.innerHeight)
  }

  function addContent(content: string, face: string) {
    const newsideDiv = document.createElement('sideDiv')
    newsideDiv.className = 'cell'
    const newContent = document.createTextNode(content)
    newsideDiv.appendChild(newContent)
    const currentsideDiv = document.getElementById(face)
    currentsideDiv?.appendChild(newsideDiv)
  }

  addContent('1', 'face1')
  addContent('2', 'face2')
  addContent('3', 'face3')
  addContent('4', 'face4')
  addContent('5', 'face5')
  addContent('6', 'face6')
}

onMounted(() => {
  setupAnimation()
})
</script>
