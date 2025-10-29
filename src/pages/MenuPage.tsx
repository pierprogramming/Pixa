import ColorPicker from "../components/ColorPicker";
import PaletteHistory from "../components/PaletteHistory";

const MenuPage = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-[# bg-[#46494c]">
      <ColorPicker />
      <PaletteHistory />
    </div>
  );
};

export default MenuPage;
