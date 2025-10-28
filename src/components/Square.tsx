import type { ISquare } from "../store/GridStore";

interface IProp {
  sq: ISquare;
}
const Square = ({ sq }: IProp) => {
  return <div className="size-4 border-1 border-black" id={sq.key}></div>;
};

export default Square;
