import { create } from "zustand";

const textures = ["1.jpeg","3.jpeg"];

export const useStore = create((set) => ({
  index: 0,
  texture:[textures[0],textures[1]],
  setIndex: (num) => set({ index: num, texture: textures[num] }),
}));