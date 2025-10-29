import { createContext, type Dispatch, type SetStateAction } from "react";

export interface ColorContextType {
    currentColor: string;
    usedColor: string[];
    setCurrentColor: Dispatch<SetStateAction<string>>;
    setUsedColor: Dispatch<SetStateAction<string[]>>;
}

export const ColorContext = createContext<ColorContextType>({ 
    currentColor: '', 
    usedColor: [], 
    setCurrentColor: (value) => {value}, 
    setUsedColor: (value) => {value},
});