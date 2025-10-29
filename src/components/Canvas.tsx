import { useEffect, useState } from "react";
import { useCanvas, useSquare, type ISquare } from "../store/GridStore";
import Square from "./Square";
import { useColor } from "../store/PaletteStore";

const ROW_SIZE = 40;
const COL_SIZE = 40;

const Canvas = () => {
  const { setCol, setKey, setRow, setMouseIsDown, setMouseIsOver, setColor } =
    useSquare();
  const { canvas, setCanvas } = useCanvas();
  const { currentColor } = useColor();
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    createGrid();
  }, []);

  const createGrid = () => {
    const canvas: ISquare[][] = [];
    for (let i = 0; i < ROW_SIZE; i++) {
      const row: ISquare[] = [];
      for (let j = 0; j < COL_SIZE; j++) {
        row.push(createSquare(i, j));
      }
      canvas.push(row);
    }

    setCanvas(canvas);
  };

  const createSquare = (row: number, col: number): ISquare => {
    return {
      row: row,
      col: col,
      key: `row-${row}-col-${col}`,
      color: "#FFFFFF",
      mouseIsDown: false,
      mouseIsOver: false,
      setCol,
      setKey,
      setRow,
      setMouseIsDown,
      setMouseIsOver,
      setColor,
    };
  };

  const handleFillSquare = (row: number, col: number) => {
    const newCanvas = canvas.slice();
    const square = newCanvas[row][col];
    if (square.color !== currentColor && isPressed) {
      const newSquare = {
        ...square,
        color: currentColor,
        mouseIsDown: true,
      };

      newCanvas[row][col] = newSquare;
      setCanvas(newCanvas);
    }
  };

  const check = () => {
    console.log(canvas[0][0]);
  };
  return (
    <div className="m-10">
      {canvas.map((sq, rId) => {
        return (
          <div
            className="flex justify-center"
            id={`row-${rId}`}
            key={`row-${rId}`}
          >
            {sq.map((s, cId) => {
              return (
                <Square
                  sq={s}
                  key={`row-${rId}-col-${cId}`}
                  fillSquare={handleFillSquare}
                  setIsPressed={setIsPressed}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Canvas;
