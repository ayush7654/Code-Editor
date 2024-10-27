import { useEffect, useRef } from "react";
import { Center } from "@react-three/drei";
import gsap from "gsap";

import { CustomMaterial } from "./material";

export const Item4 = () => {
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const cone1Ref = useRef(null);
  const cone2Ref = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    if (
      ring1Ref.current &&
      ring2Ref.current &&
      cone1Ref.current &&
      cone2Ref.current &&
      groupRef.current
    ) {
      const timeline = gsap.timeline({
        repeat: -1,
      });

      timeline
        .to(
          ring1Ref.current.rotation,
          {
            z: `+=${Math.PI * 2}`,
            x: `+=${Math.PI * 2}`,
            duration: 4,
            ease: "none",
          },
          0
        )
        .to(
          ring2Ref.current.rotation,
          {
            z: `-=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            ease: "none",
            duration: 4,
          },
          0
        )
        .to(
          groupRef.current.rotation,
          {
            y: Math.PI * 2,
            duration: 4,
            ease: "none",
          },
          0
        );
    }
  }, []);

  return (
    <Center ref={groupRef}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.1, 0.1]} />
        <CustomMaterial />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.1]} />
        <CustomMaterial />
      </mesh>
      <group scale={0.8}>
        <mesh ref={cone1Ref} position={[0, 1, 0]} rotation={[0, 0, 0]}>
          <coneGeometry args={[1, 1.41, 4]} />
          <CustomMaterial />
        </mesh>
        <mesh
          ref={cone2Ref}
          position={[0, -1, 0]}
          rotation={[-Math.PI, 0, 0]}
        >
          <coneGeometry args={[1, 1.41, 4]} />
          <CustomMaterial />
        </mesh>
      </group>
    </Center>
  );
};