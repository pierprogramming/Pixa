import { useEffect } from "react";
import { useCanvas, useSquare, type ISquare } from "../store/GridStore";
import { useColor } from "../store/PaletteStore";

const ROW_SIZE = 60;
const COL_SIZE = 40;
const SIZE = ROW_SIZE * COL_SIZE;

const Canvas = () => {
  const { setColor } = useSquare();
  const { canvas, setCanvas } = useCanvas();
  const { currentColor } = useColor();

  useEffect(() => {
    createGrid();
  }, []);

  const createGrid = () => {
    const canvas: ISquare[] = [];
    for (let i = 0; i < SIZE; i++) {
      canvas.push({
        color: "#FFFFFF",
        setColor,
      });
    }

    setCanvas(canvas);
  };

  const handleFillSquare = (id: number) => {
    const newCanvas = canvas.slice();
    const square = newCanvas[id];

    if (square.color !== currentColor) {
      const newSquare = {
        ...square,
        color: currentColor,
      };

      newCanvas[id] = newSquare;
      setCanvas(newCanvas);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#c5c3c6]">
      <div
        className="flex flex-col items-center justify-center w-5/6 bg-[#c5c3c6]"
        id="canvas"
      >
        <div
          className="grid gap-[1px] m-10 p-7"
          style={{
            gridTemplateColumns: `repeat(${ROW_SIZE}, 20px)`,
            gridTemplateRows: `repeat(${COL_SIZE}, 20px)`,
          }}
        >
          {canvas.map((sq, id) => {
            return (
              <div
                className="size-5 cursor-pointer"
                style={{ backgroundColor: sq.color }}
                id={`sq-${id}`}
                key={`sq-${id}`}
                onClick={() => handleFillSquare(id)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Canvas;
