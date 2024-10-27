import { useTexture } from "@react-three/drei";
import { forwardRef } from "react";
import { useStore } from "./useStore";

export const CustomMaterial = forwardRef((props, ref) => {
  const matcap = useStore((x) => x.texture[1]); // Access texture from store
  const texture = useTexture(matcap); // Load texture using useTexture

  return (
    <meshMatcapMaterial
      {...props}
      ref={ref}
      matcap={texture}
    />
  );
});
