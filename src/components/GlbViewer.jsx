import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeJSViewer() {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const cubeRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Create a scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    rendererRef.current = renderer;

    // Append the renderer's canvas to the container
    container.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cubeRef.current = cube;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;

      renderer.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      rendererRef.current.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

export default ThreeJSViewer;
