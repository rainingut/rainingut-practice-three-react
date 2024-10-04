import { useEffect, useRef } from 'react';
import * as THREE from 'three';




const ThreeSimple = () => {
  // https://home.gamer.com.tw/artwork.php?sn=5438353
  const canvasRef = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({canvas: canvasRef.current});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // document.body.appendChild(renderer.domElement);
    
    // add a green cube to the scene
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 12;
    
    renderer.render(scene, camera);
    // // render the scen
    // function animate() {
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(scene, camera);
    // }
    // renderer.setAnimationLoop(animate);
    return () => {
      // renderer.forceContextLoss();
      // renderer.dispose();
      // cube.geometry.dispose();
      // cube.material.dispose();
    }
  }, []);


  return <>
    <canvas ref={canvasRef} />
  </>
}

export default ThreeSimple;