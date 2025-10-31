import { useColor } from "../store/PaletteStore";

const PaletteHistory = () => {
  const { usedColor, setCurrentColor } = useColor();

  const updateCurrentColor = (color: string) => {
    const colorPicker = document.getElementById(
      "color-picker"
    ) as HTMLInputElement;
    if (colorPicker) colorPicker.value = color;
    setCurrentColor(color);
  };

  return (
    <div className="rounded-md m-4 bg-[#FFFFFC] h-20 py-4 px-4 w-2/6">
      <ul className="flex overflow-x-auto justify-start scrollbar-thin gap-4">
        {usedColor.map((c) => (
          <li
            key={c}
            className="flex-shrink-0 size-12 rounded-md border-1 border-[#bfbfbf] cursor-pointer"
            style={{ background: c }}
            onClick={() => updateCurrentColor(c)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default PaletteHistory;
