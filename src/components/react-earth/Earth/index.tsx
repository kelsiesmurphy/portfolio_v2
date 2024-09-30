import { Sphere } from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { motion } from "framer-motion-3d";
import { earthFragmentShader, earthVertexShader } from "./shaders";
import { SRGBColorSpace, Vector3 } from "three";
import { useLightDirection } from "../hooks/useLightDirection";
import { Atmosphere } from "../Atmosphere";

export interface EarthProps {
  lightDirection: Vector3;
}

const verteces = Math.pow(2, 9);

export default function EarthCanvas() {
  const scene = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  const EarthMesh = ({ lightDirection }: EarthProps) => {
    const { width } = useThree((state) => state.viewport);

    console.log(width)

    const [earthDayTexture, nightTexture, cloudTexture] = useLoader(
      TextureLoader,
      [
        "/assets/8k_earth_daymap.jpg",
        "/assets/8k_earth_nightmap.jpg",
        "/assets/8k_earth_clouds.jpg",
      ]
    );

    earthDayTexture.colorSpace =
      nightTexture.colorSpace =
      cloudTexture.colorSpace =
        SRGBColorSpace;

    const scaleMultiplier = () => {
      if (width < 6) {
        // Mobile size
        return 1.5;
      } else if (width >= 6 && width < 12) {
        // Tablet size
        return 2;
      } else {
        // Desktop size
        return 2.5;
      }
    };

    const uniformsRef = useRef({
      dayMap: { value: earthDayTexture },
      nightMap: { value: nightTexture },
      cloudMap: { value: cloudTexture },
      uTime: { value: 0 },
      lightDirection: { value: lightDirection.clone() },
    });

    return (
      <motion.mesh scale={scaleMultiplier()} rotation-y={scrollYProgress}>
        <Sphere args={[1, verteces, verteces]}>
          <shaderMaterial
            vertexShader={earthVertexShader}
            fragmentShader={earthFragmentShader}
            uniforms={uniformsRef.current}
          />
          <Atmosphere lightDirection={lightDirection} />
        </Sphere>
      </motion.mesh>
    );
  };

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <EarthMesh lightDirection={useLightDirection()} />
    </Canvas>
  );
}
