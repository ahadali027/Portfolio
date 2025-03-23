import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, PerspectiveCamera, AdaptiveDpr, PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';

// Performance adjustment component
const PerformanceOptimizer = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    // Enable memory info for debugging in dev environment
    if (process.env.NODE_ENV === 'development') {
      console.log('WebGL renderer initialized:', gl.info);
    }
    
    // Cleanup function
    return () => {
      if (gl) {
        const materials = gl.info.memory.geometries;
        const textures = gl.info.memory.textures;
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`Cleaning up: ${materials} geometries, ${textures} textures`);
        }
      }
    };
  }, [gl]);
  
  return null;
};

// Tech Logo component
const TechLogo = ({ position, rotation, text, color, scale = 1 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={[scale, scale, scale]}>
        <boxGeometry args={[1.2, 1.2, 0.2]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.2} />
        <Text 
          position={[0, 0, 0.15]} 
          fontSize={0.5}
          color="white" 
          anchorX="center" 
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
          fontWeight="bold"
          maxWidth={0.8}
          clipRect={[-0.4, -0.4, 0.4, 0.4]}
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
};

const SpinningText = ({ text, position, color }) => {
  const textRef = useRef();

  useFrame((state) => {
    textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    textRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Text
      ref={textRef}
      position={position}
      color={color}
      fontSize={0.8}
      font="/fonts/Inter-Bold.woff"
      anchorX="center"
      anchorY="middle"
      fontWeight="bold"
    >
      {text}
    </Text>
  );
};

// Main scene component
const Scene = () => {
  const sceneRef = useRef();

  const techStacks = [
    { name: 'M', position: [0, 1.5, 0], color: '#4DB33D', rotation: [0, 0, 0], scale: 1 },  // MongoDB
    { name: 'E', position: [1.5, 0, 0], color: '#000000', rotation: [0, 0, 0], scale: 1 },  // Express
    { name: 'R', position: [0, -1.5, 0], color: '#61DAFB', rotation: [0, 0, 0], scale: 1 },  // React
    { name: 'N', position: [-1.5, 0, 0], color: '#8CC84B', rotation: [0, 0, 0], scale: 1 },  // Node.js
  ];

  useFrame((state) => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={sceneRef}>
      {techStacks.map((tech, index) => (
        <TechLogo 
          key={index}
          position={tech.position}
          rotation={tech.rotation}
          text={tech.name}
          color={tech.color}
          scale={tech.scale}
        />
      ))}

      {/* Central MERN text */}
      <SpinningText 
        text="STACK" 
        position={[0, 0, 0]} 
        color="#0ea5e9" 
      />
    </group>
  );
};

const MernStack3D = () => {
  return (
    <div className="w-full h-full aspect-square max-w-md mx-auto relative">
      <Canvas 
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 5], fov: 40 }} 
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0, 0, 0, 0));
        }}
      >
        <PerformanceMonitor
          onIncline={() => {
            // Increase quality when performance is good
            console.log('Performance is good - increasing quality');
          }}
          onDecline={() => {
            // Decrease quality when performance is poor
            console.log('Performance issues detected - reducing quality');
          }}
        >
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1} 
            castShadow 
            shadow-mapSize={[2048, 2048]}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Scene />
          <PerformanceOptimizer />
          <AdaptiveDpr pixelated />
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
};

export default MernStack3D; 