import { useColor } from "../store/PaletteStore";

const PaletteHistory = () => {
  const { usedColor, setCurrentColor } = useColor();
  return (
    <div className="overflow-auto rounded-md m-4 bg-[#FFFFFC] h-100 py-10 px-4">
      <ul className="flex flex-wrap justify-center gap-4">
        {usedColor.map((c) => (
          <li
            key={c}
            className="size-12 rounded-md border-1 border-[#bfbfbf]"
            style={{ background: c }}
            onClick={() => setCurrentColor(c)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaletteHistory;
