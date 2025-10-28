import { useEffect } from "react";
import { useCanvas, useSquare, type ISquare } from "../store/GridStore";
import Square from "./Square";

const ROW_SIZE = 70;
const COL_SIZE = 90;

const Canvas = () => {
  const { setCol, setKey, setRow, setMouseIsDown, setMouseIsOver, setColor } =
    useSquare();
  const { canvas, setCanvas } = useCanvas();

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
    console.log(canvas);

    setCanvas(canvas);
  };

  const createSquare = (row: number, col: number): ISquare => {
    return {
      row: row,
      col: col,
      key: `row-${row}-col${col}`,
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

  return (
    <div className="m-10">
      {canvas.map((sq, rId) => {
        return (
          <div
            className="flex justify-center"
            id={`row-${rId}`}
            key={`row-${rId}`}
          >
            {sq.map((s) => {
              return <Square sq={s} key={s.key} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Canvas;
