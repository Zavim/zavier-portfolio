import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

function Star({ z }) {
  const starRef = useRef();
  const { nodes, materials } = useGLTF("/kirbyStar-transformed.glb");
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), //this creates a range between -+x/2
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, delta) => {
    starRef.current.rotation.set(
      (data.rX += delta),
      (data.rY += delta),
      (data.rZ += delta)
    );
    starRef.current.position.set(data.x * width, (data.y += delta), z);
    if (data.y > height) data.y = -height;
  });

  return (
    <mesh
      ref={starRef}
      geometry={nodes.Roundcube.geometry}
      material={materials.star_material}
      material-color="yellow"
      material-emissive="orange"
    />
  );
}

export default function FloatingStars({ count = 50, depth = 60 }) {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      gl={{ alpha: false }}
      camera={{ near: 0.01, far: 110, fov: 40 }}
    >
      <color attach="background" args={["#fe9bcb"]} />
      <spotLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        {Array.from({ length: count }, (_, i) => (
          <Star key={i} z={(-i / count) * depth} />
        ))}
        <EffectComposer>
          <DepthOfField
            target={[0, 0, depth / 4]}
            focalLength={1}
            bokehScale={2}
            height={700}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
