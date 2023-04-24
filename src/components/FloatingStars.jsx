import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
// import { Perf } from "r3f-perf";

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

  useFrame((_state, delta) => {
    if (animate) {
      starRef.current.rotation.set(
        (data.rX += delta / 2),
        (data.rY += delta / 2),
        (data.rZ += delta / 2)
      );
      starRef.current.position.set(data.x * width, (data.y += delta / 2), z);
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

export default function FloatingStars({ count = 30, depth = 30 }) {
  const [animate, setAnimate] = useState(true);

  const toggleAnimation = (animate) => {
    setAnimate(!animate);
  };

  return (
    <>
      <button
        className="animate-button"
        onClick={() => toggleAnimation(animate)}
      >
        <div className="animate-button-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 20"
            width="1.5em"
            height="1.5em"
            transform="rotate(10)"
          >
            <desc>star icon</desc>
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          {animate ? <span>playing</span> : <span>paused</span>}
        </div>
      </button>

      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        gl={{ alpha: false }}
        camera={{ near: 0.01, far: 110, fov: 40 }}
      >
        {/* <Perf /> */}
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
