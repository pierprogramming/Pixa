import { useColor } from "../store/PalleteStore";

const Palette = () => {
  const { currentColor, setCurrentColor, usedColor, setUsedColor } = useColor();

  const handleColorChange = (e: any) => {
    setUsedColor(e.target.value);
  };

  const handleColorPicking = (e: any) => {
    setCurrentColor(e.target.value);
  };

  return (
    <>
      <input
        type="color"
        value={currentColor}
        onBlur={handleColorChange}
        onChange={handleColorPicking}
        className="h-15 w-15"
      />
      <ul>
        {usedColor.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </>
  );
};

export default Palette;
