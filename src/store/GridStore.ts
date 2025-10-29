import { create } from "zustand";

export interface ISquare {
    color: string;
    setColor: (color: string) => void;
}

export interface ICanvas {
    canvas: ISquare[];
    setCanvas: (square: ISquare[]) => void;
}

export const useCanvas = create<ICanvas>((set) => ({
    canvas: [],
    setCanvas: (canvas: ISquare[]) => set(() => ({ canvas }))
}))

export const useSquare = create<ISquare>((set) => ({
    color: '',
    setColor: (color: string) => set(() => ({ color })),
}))