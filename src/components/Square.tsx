import { type ISquare } from "../store/GridStore";

interface IProp {
  sq: ISquare;
  setIsPressed: (c: boolean) => void;
  fillSquare: (row: number, col: number) => void;
}
const Square = ({ sq, fillSquare, setIsPressed }: IProp) => {
  const callFillSquare = () => {
    fillSquare(sq.row, sq.col);
  };
  return (
    <div
      className="size-4 border-1 border-[#9BF6FF] m-[0.5px]"
      style={{ backgroundColor: sq.color, cursor: "pointer" }}
      onClick={callFillSquare}
      onMouseOver={() => fillSquare(sq.row, sq.col)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      draggable={false}
    ></div>
  );
};

export default Square;
