import { create } from "zustand";

export interface IColor {
    currentColor: string;
    usedColor: string[];
    setCurrentColor: (color: string) => void;
    setUsedColor: (color: string) => void;
}

export const useColor = create<IColor>((set) => ({
    currentColor: "",
    usedColor: [],
    setCurrentColor: (color: string) => set(() => ({ currentColor: color })),
    setUsedColor: (color: string) => set((state) => ({ usedColor: [...state.usedColor, color] }))
}))

