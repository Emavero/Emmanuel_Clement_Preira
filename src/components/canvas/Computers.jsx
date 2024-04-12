import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Composant qui représente un ordinateur
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Lumière hémisphérique */}
      <hemisphereLight intensity={1} groundColor='black' />
      {/* Lumière spot */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Lumière ponctuelle */}
      <pointLight intensity={2} />
      {/* Modèle de l'ordinateur */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.2, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Composant principal qui contient le Canvas et les contrôles de navigation
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ajoute un écouteur pour les changements de taille d'écran
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Définit la valeur initiale de la variable d'état `isMobile`
    setIsMobile(mediaQuery.matches);

    // Définit une fonction de rappel pour gérer les changements de requête média
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Ajoute la fonction de rappel comme écouteur pour les changements de requête média
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Supprime l'écouteur lorsque le composant est démonté
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense pour le chargement asynchrone */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Contrôles de navigation */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Composant représentant l'ordinateur */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Préchargement des ressources */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
