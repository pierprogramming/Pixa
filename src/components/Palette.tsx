import { useColor } from "../store/PaletteStore";
import PaletteHistory from "./PaletteHistory";

const Palette = () => {
  const { currentColor, setCurrentColor, setUsedColor } = useColor();

  const handleColorChange = (e: any) => {
    setUsedColor(e.target.value);
  };

  const handleColorPicking = (e: any) => {
    setCurrentColor(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <input
          id="color-picker"
          type="color"
          value={currentColor}
          onBlur={handleColorChange}
          onChange={handleColorPicking}
          className="size-14 bg-transparent"
          style={{
            borderRadius: 16,
            border: 1,
            borderColor: "#bfbfbf",
          }}
        />
      </div>

      <PaletteHistory />
    </>
  );
};

export default Palette;
