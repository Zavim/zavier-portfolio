import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Instances, Instance } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import { useStore } from "@nanostores/react";
import { isDark } from "../themeStore";
import { animate } from "../animateStore";

function Stars({ depth, animate, dark }) {
  const { nodes, materials } = useGLTF("/kirbyStar-transformed.glb");
  const { size, viewport, camera } = useThree();
  const count = Math.round(size.width / 35);
  let starColor;
  let starEmissive;

  if (dark) {
    starColor = "white";
    starEmissive = "yellow";
  } else {
    starColor = "yellow";
    starEmissive = "orange";
  }

  let data = [];
  for (let i = 0; i < count; i++) {
    const z = (-i / count) * depth;
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
    data.push({
      position: [0, 0, z],
      width: width,
      height: height,
      z: z,
    });
  }
  return (
    <Instances
      material={materials.star_material}
      material-color={starColor}
      material-emissive={starEmissive}
      geometry={nodes.Roundcube.geometry}
    >
      <group position={[0, 0, 0]}>
        {data.map((props, i) => (
          <Star key={i} animate={animate} {...props} />
        ))}
      </group>
    </Instances>
  );
}

function Star({ animate, ...props }) {
  const height = props.height;
  const width = props.width;
  const z = props.z;
  const starRef = useRef();
  const rotationScalar = 5;

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2), //this creates a range between -+x/2
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((_state, delta) => {
    if (animate) {
      starRef.current.position.set(data.x, data.y, z);
      starRef.current.rotation.set(
        (data.rX += delta / rotationScalar),
        (data.rY += delta / rotationScalar),
        (data.rZ += delta / rotationScalar)
      );
      starRef.current.position.set(data.x * width, (data.y += delta / 3), z);
      if (data.y > height) data.y = -height;
    }
  });
  return (
    <group {...props}>
      <Instance ref={starRef} />
    </group>
  );
}

export default function FloatingStars({ depth = 30 }) {
  const $isDark = useStore(isDark);
  const $animate = useStore(animate);

  return (
    <div className={$isDark ? "content-container dark" : "content-container"}>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        gl={{ alpha: false }}
        camera={{ near: 0.01, far: 110, fov: 40 }}
      >
        {$isDark ? (
          <color attach="background" args={["#0e1226"]} />
        ) : (
          <color attach="background" args={["#fe9bcb"]} />
        )}
        {/* <Perf /> */}
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          {$isDark ? (
            <Environment preset="night" />
          ) : (
            <Environment preset="sunset" />
          )}
          {/* {Array.from({ length: count }, (_, i) => (
            <Star key={i} z={(-i / count) * depth} animate={animate} />
          ))*/}
          <Stars depth={depth} animate={$animate} dark={$isDark} />
          <EffectComposer>
            {/* <DepthOfField
              focalLength={1}
              bokehScale={2}
              // height={700}
            /> */}
            <DepthOfField
              focusDistance={1.2}
              focalLength={0.1}
              bokehScale={3}
              height={700}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
