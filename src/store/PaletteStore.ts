import { create } from "zustand";

export interface IColor {
    currentColor: string;
    usedColor: string[];
    setCurrentColor: (color: string) => void;
    setUsedColor: (color: string) => void;
}

export const useColor = create<IColor>((set) => ({
    currentColor: "#000000",
    usedColor: [],
    setCurrentColor: (color: string) => set(() => ({ currentColor: color })),
    setUsedColor: (color: string) => set((state) => {
        if(state.usedColor.indexOf(color) !== -1) {
            state.usedColor.splice(state.usedColor.indexOf(color), 1);
        }
        return { usedColor: [color, ...state.usedColor] }
    })
}))

