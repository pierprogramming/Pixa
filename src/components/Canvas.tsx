import { useEffect, useRef, useState } from "react";
import { useColor } from "../store/PaletteStore";

const CELL_SIZE = 20;
const ROWS = 30;
const COLS = 40;

const Canvas = () => {
  const canvasRef = useRef(null);
  const [isPressed, setIsPressed] = useState(false);
  const { currentColor } = useColor();

  useEffect(() => {
    setUpGrid();
  }, []);

  const setUpGrid = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // draw full grid initially
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        drawCell(ctx, r, c, "#fff");
      }
    }

    // optional: draw grid lines
    ctx.strokeStyle = "#ccc";
    for (let i = 0; i <= ROWS; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(COLS * CELL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }
    for (let j = 0; j <= COLS; j++) {
      ctx.beginPath();
      ctx.moveTo(j * CELL_SIZE, 0);
      ctx.lineTo(j * CELL_SIZE, ROWS * CELL_SIZE);
      ctx.stroke();
    }
  };

  // Handle clicks on the canvas
  const draw = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const col = Math.floor(x / CELL_SIZE);
    const row = Math.floor(y / CELL_SIZE);

    const ctx = canvasRef.current.getContext("2d");
    drawCell(ctx, row, col, currentColor);
  };
  const handleMouseMove = (e) => {
    if (isPressed) {
      draw(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#c5c3c6]">
      <canvas
        id="canvas"
        ref={canvasRef}
        width={COLS * CELL_SIZE}
        height={ROWS * CELL_SIZE}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onMouseMove={handleMouseMove}
        onClick={draw}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

// Draw a single cell
const drawCell = (ctx, row: number, col: number, color: string) => {
  ctx.fillStyle = color;
  ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  ctx.strokeStyle = "#ccc";
  ctx.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
};

export default Canvas;
