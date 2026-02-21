// import * as THREE from 'three'
// import * as OrbitControls from "three/addons/controls/OrbitControls";
// import { GUI } from "lil-gui";
// import { mergeVertices } from "three/addons/utils/BufferGeometryUtils.js";
// import customShaderMaterial from "three-custom-shader-material/vanilla"
// import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
//
import { createGods } from "./module/addSiteToPotfolio.js";
import { leftScroll } from "./module/simpleLeftScroll.js";
import { textAnimation } from "./module/grid&TextAnimation.js";
import { popapWindow } from "./module/modelPopap.js";
import { textTyping } from "./module/textSelfTyping.js";
import { gridCenterStuff } from "./module/unHoverGrid.js";
import {formTypeOne, initFormHandler} from "./forms/mainForm.js"

// import waterVertex from "./shaders/plane/vertex.glsl"
// import waterFragment from "./shaders/plane/fragment.glsl"
// import sphereVertex from "./shaders/sphere/vertex.glsl"
// import sphereFragment from "./shaders/sphere/fragment.glsl"
// import eyeBallVertex from "./shaders/eyeBall/vertex.glsl"
// import eyeBallFragment from "./shaders/eyeBall/fragment.glsl"
 const canvas = document.querySelector(".webgl");
 const blocks = document.querySelectorAll(".blocks");
 const buyButton = document.querySelectorAll("#buyButton");
// console.log(buyButton[0])

//modules
leftScroll();
textAnimation(blocks);
createGods();
popapWindow(buyButton, formTypeOne, initFormHandler);
textTyping();
gridCenterStuff();

// const scene = new THREE.Scene()
// const time = new THREE.Clock()
//
//
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
// camera.position.z = 22;
// camera.position.y = 3;
// scene.add(camera);
//
// let sphere = new THREE.IcosahedronGeometry(4, 32);
// sphere = mergeVertices(sphere)
// sphere.computeTangents()
// let plane = new THREE.PlaneGeometry(150, 40, 1000, 1000);
// let shunnyBox = new THREE.BoxGeometry(3,3,3)
// //const eyeBall = new THREE.PlaneGeometry(3, 3, 440, 440);
//
// const textureLoader = new THREE.TextureLoader()
// const cubeTexture = textureLoader.load("./textures/misticle box/baseColor.png",()=>{
//   console.log('Текстура загружена!')
// }, undefined, function(error) {
//   console.error('Ошибка загрузки текстуры:', error);
// })
//
// cubeTexture.repeat.set(.3,.3)
//
// cubeTexture.wrapS = THREE.RepeatWrapping
// cubeTexture.wrapT = THREE.RepeatWrapping
// // cubeTexture.offset.x = 1.
// // cubeTexture.offset.y = 1.
// const cubeNormal = textureLoader.load("./textures/misticle box/Tiles_normal.png")
// const cubeRoughness = textureLoader.load("./textures/misticle box/roughness.png")
// const waterNoise = textureLoader.load("./noise/noise2.png")
// const scver = textureLoader.load("./png.png")
// cubeNormal.repeat.set(.3,.3)
//
// cubeNormal.wrapS = THREE.RepeatWrapping
// cubeNormal.wrapT = THREE.RepeatWrapping
// cubeRoughness.repeat.set(.3,.3)
//
// cubeRoughness.wrapS = THREE.RepeatWrapping
// cubeRoughness.wrapT = THREE.RepeatWrapping
//
// //#endregion
//
// //#region            uniforms
// const uniforms = {
//   uTime: new THREE.Uniform(0),
//   uPositionFrequency: new THREE.Uniform(0.5),
//   uTimeFrequency: new THREE.Uniform(0.4),
//   uSrength: new THREE.Uniform(0.3),
//   waterNoiseTexture: new THREE.Uniform(waterNoise)
// }
// //#endregion
//
// //#region            materials
// const sphereMaterial = new customShaderMaterial({
//   baseMaterial: THREE.MeshPhysicalMaterial,
//   vertexShader: sphereVertex,
//   fragmentShader: sphereFragment,
//   transparent: true,
//   uniforms: uniforms,
//   transmission: .9,
//   metalness: 0.7,
//   roughness: 0.1})
//
// const planeMaterial = new customShaderMaterial({
//   baseMaterial: THREE.MeshPhysicalMaterial,
//   vertexShader: waterVertex,
//   fragmentShader: waterFragment,
//   metalness: 0.5,
//   roughness: 0.4,
//   thickness: 0.1,
//   reflectivity: 0.5,
//   uniforms: uniforms})
//
// const shunnyBoxMaterial = new THREE.MeshPhysicalMaterial({
//   map: cubeTexture,
//   roughnessMap: cubeRoughness,
//   normalMap:cubeNormal,
//   // roughness: 1.,
//   // thickness: 0.1,
//   // reflectivity: 0.5,
//   // emissive: new THREE.Color("red"), // белый цвет
//   // emissiveIntensity: 1.0,
//   clearcoat: 0,
//   metalness: 1,
//   iridescence: 1.
// })
//
// const eyeBallMaterial = new customShaderMaterial({
//   baseMaterial: THREE.MeshPhysicalMaterial,
//   vertexShader: eyeBallVertex,
//   fragmentShader: eyeBallFragment,
//   // emissive: 0xff0000,
//   transparent: false,
//   uniforms:{
//   scver: new THREE.Uniform(scver)}})
//
// const meshPlane = new THREE.Mesh(plane,planeMaterial)
// meshPlane.rotateX(-Math.PI / 2)
// const meshSphere = new THREE.Mesh(sphere,sphereMaterial)
// meshSphere.position.y = 7;
// meshSphere.position.x = 16;
// const meshShunnyBox= new THREE.Mesh(shunnyBox, shunnyBoxMaterial)
// meshShunnyBox.position.y = 7;
// meshShunnyBox.position.x = 16;
// meshShunnyBox.rotation.y = 12
// scene.add(meshPlane,meshSphere,meshShunnyBox);
// //#endregion
//
// //#region             lite
// const abientLight = new THREE.AmbientLight(0xffffff,1)
// const directionalLight = new THREE.DirectionalLight('white',92)
// directionalLight.position.z = 93;
// directionalLight.position.y = 3;
// directionalLight.target = meshSphere;
//
// const spherePointLight = new THREE.PointLight(0xff0000,53)
// spherePointLight.position.x = 16;
// spherePointLight.position.y = 7;
// scene.add(spherePointLight,directionalLight)
// //#endregion
//
// //#region             control
// const controls = new OrbitControls.OrbitControls(camera, canvas);
// //#endregion
//
// //#region             renderer
// const renderer = new THREE.WebGLRenderer({canvas})
// renderer.setSize(window.innerWidth, window.innerHeight)
//
// //#endregion
//
// //#region           tick function
// function tick(){
// const elapsedTime = time.getElapsedTime()
// uniforms.uTime.value = elapsedTime
//
// if (shunnyBoxMaterial){
//   meshShunnyBox.rotation.x = - elapsedTime * 0.2
//   meshShunnyBox.rotation.y = elapsedTime * 0.1
// }
// renderer.render(scene,camera)
//
// requestAnimationFrame(tick)
// controls.update()
// }
// tick()
// //#endregion
