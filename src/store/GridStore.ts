import { create } from "zustand";

export interface ISquare {
    row: number;
    col: number;
    mouseIsOver: boolean;
    mouseIsDown: boolean;
    color: string;
    key: string;
    setRow: (r: number) => void;
    setCol: (r: number) =>  void;
    setMouseIsOver: (s: boolean) => void;
    setMouseIsDown: (s: boolean) => void;
    setColor: (c: string) => void;
    setKey: (k: string) => void;
}

export interface ICanvas {
    canvas: ISquare[][];
    setCanvas: (square: ISquare[][]) => void;
}

export const useCanvas = create<ICanvas>((set) => ({
    canvas: [],
    setCanvas: (canvas: ISquare[][]) => set(() => ({ canvas }))
}))

export const useSquare = create<ISquare>((set) => ({
    row: 0,
    col: 0,
    mouseIsDown: false,
    mouseIsOver: false,
    color: '',
    key: '',
    setRow: (row: number) => set(() => ({ row })),
    setCol: (col: number) => set(() => ({ col })),
    setMouseIsOver: (mouseIsOver: boolean) =>  set(() => ({ mouseIsOver })),
    setMouseIsDown: (mouseIsDown: boolean) =>  set(() => ({ mouseIsDown })),
    setColor: (color: string) => set(() => ({ color })),
    setKey: (key: string) => set(() => ({ key })),
}))