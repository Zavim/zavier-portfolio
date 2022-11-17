import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

function Star({ z, animate }) {
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
    if (animate) {
      starRef.current.rotation.set(
        (data.rX += delta),
        (data.rY += delta),
        (data.rZ += delta)
      );
      starRef.current.position.set(data.x * width, (data.y += delta), z);
      if (data.y > height) data.y = -height;
    }
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
  const [animate, setAnimate] = useState(true);

  const toggleAnimation = (animate) => {
    setAnimate(!animate);
  };

  return (
    <>
      <button class="animate-button" onClick={() => toggleAnimation(animate)}>
        animations: {animate ? <span>on</span> : <span>off</span>}
      </button>

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
            <Star key={i} z={(-i / count) * depth} animate={animate} />
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
    </>
  );
}
