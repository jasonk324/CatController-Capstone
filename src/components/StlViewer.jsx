import React, {useRef, useEffect} from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

function STLViewer() {
  const containerRef = useRef(null);
  const renderer = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio set to 1 initially
    renderer.current = new THREE.WebGLRenderer();

    // Set the initial size of the renderer to fit the container
    updateRendererSize();

    containerRef.current.appendChild(renderer.current.domElement);

    // Hardcoded path to your STL file
    const stlFilePath = '../stlFiles/Leg.stl';

    const loader = new STLLoader();
    loader.load(stlFilePath, (geometry) => {
      const material = new THREE.MeshNormalMaterial();
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.current.render(scene, camera);
    };

    window.addEventListener('resize', updateRendererSize); // Listen for window resize

    animate();

    // Function to update the renderer size to match the container size
    function updateRendererSize() {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      renderer.current.setSize(containerWidth, containerHeight);
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateRendererSize);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

export default STLViewer;