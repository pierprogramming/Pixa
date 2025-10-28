import type { ISquare } from "../store/GridStore";

interface IProp {
  sq: ISquare;
}
const Square = ({ sq }: IProp) => {
  return (
    <div
      className="size-4 border-1 border-[#9BF6FF] m-[0.5px]"
      style={{ backgroundColor: sq.color }}
    ></div>
  );
};

export default Square;
