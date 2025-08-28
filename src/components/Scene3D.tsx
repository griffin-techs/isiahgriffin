import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} position={position} args={[1, 32, 32]}>
        <MeshDistortMaterial
          color="hsl(var(--primary))"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const AnimatedBox = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
      <Box ref={meshRef} position={position} args={[1.5, 1.5, 1.5]}>
        <meshStandardMaterial
          color="hsl(var(--accent))"
          roughness={0.3}
          metalness={0.7}
        />
      </Box>
    </Float>
  );
};

const AnimatedTorus = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
      <Torus ref={meshRef} position={position} args={[1, 0.4, 16, 100]}>
        <meshStandardMaterial
          color="hsl(var(--secondary))"
          roughness={0.2}
          metalness={0.9}
        />
      </Torus>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="hsl(var(--primary))"
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5}
          color="hsl(var(--accent))"
        />
        
        <AnimatedSphere position={[-4, 2, 0]} />
        <AnimatedBox position={[4, -1, -2]} />
        <AnimatedTorus position={[0, -3, 1]} />
        
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;