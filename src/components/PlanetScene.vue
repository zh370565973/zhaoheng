<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
const host=ref<HTMLDivElement|null>(null)
let renderer:THREE.WebGLRenderer|undefined, frame=0, observer:ResizeObserver|undefined
let scene:THREE.Scene, camera:THREE.PerspectiveCamera, planet:THREE.Mesh, stars:THREE.Points
const reduced=typeof window!=='undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
function resize(){if(!host.value||!renderer||!camera)return;const w=host.value.clientWidth,h=host.value.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
onMounted(()=>{
 if(!host.value||!window.WebGLRenderingContext)return
 try{
  scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.z=5.2
  renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));host.value.appendChild(renderer.domElement)
  const geo=new THREE.IcosahedronGeometry(1.22,5)
  const mat=new THREE.MeshStandardMaterial({color:0x172e58,metalness:.72,roughness:.32,wireframe:false})
  planet=new THREE.Mesh(geo,mat);scene.add(planet)
  const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.245,2),new THREE.MeshBasicMaterial({color:0x62dcff,wireframe:true,transparent:true,opacity:.14}));planet.add(wire)
  scene.add(new THREE.AmbientLight(0x8bbcff,1.7));const key=new THREE.PointLight(0x64e7ff,26);key.position.set(3,2,4);scene.add(key);const rim=new THREE.PointLight(0x875cff,18);rim.position.set(-3,-1,-2);scene.add(rim)
  const positions=new Float32Array(1500);for(let i=0;i<500;i++){const r=5+Math.random()*9,a=Math.random()*Math.PI*2,b=Math.acos(2*Math.random()-1);positions[i*3]=r*Math.sin(b)*Math.cos(a);positions[i*3+1]=r*Math.cos(b);positions[i*3+2]=r*Math.sin(b)*Math.sin(a)}
  const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(positions,3));stars=new THREE.Points(sg,new THREE.PointsMaterial({color:0x8dbdff,size:.018,transparent:true,opacity:.8}));scene.add(stars)
  resize();observer=new ResizeObserver(resize);observer.observe(host.value)
  const tick=()=>{frame=requestAnimationFrame(tick);if(!reduced){planet.rotation.y+=.0018;planet.rotation.x=Math.sin(performance.now()*.00025)*.07;stars.rotation.y-=.00012}renderer?.render(scene,camera)};tick()
 }catch(e){console.warn('3D scene unavailable; showing CSS fallback.',e)}
})
onBeforeUnmount(()=>{cancelAnimationFrame(frame);observer?.disconnect();scene?.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Points){o.geometry.dispose();const m=o.material;if(Array.isArray(m))m.forEach(x=>x.dispose());else m.dispose()}});renderer?.dispose();renderer?.domElement.remove()})
</script>
<template><div ref="host" class="planet-scene" aria-label="缓慢旋转的数字星球"><div class="planet-fallback"></div></div></template>