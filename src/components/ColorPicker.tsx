import { useColor } from "../store/PaletteStore";

const ColorPicker = () => {
  const { setCurrentColor, setUsedColor } = useColor();

  const handleColorChange = (e: any) => {
    setCurrentColor(e.target.value);
    setUsedColor(e.target.value);
  };

  return (
    <div className="flex justify-center mt-10">
      <input
        id="color-picker"
        type="color"
        onBlur={handleColorChange}
        className="size-14 bg-transparent"
        style={{
          borderRadius: 16,
          border: 1,
          borderColor: "#bfbfbf",
        }}
      />
    </div>
  );
};

export default ColorPicker;
