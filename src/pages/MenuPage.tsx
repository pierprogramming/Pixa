import { BsEraser } from "react-icons/bs";
import ColorPicker from "../components/ColorPicker";
import PaletteHistory from "../components/PaletteHistory";
import { useDownloadCanvas } from "../hooks/useDownloadCanvas";
import { GrDownload } from "react-icons/gr";

const MenuPage = () => {
  const { isDownloading, downloadPNG } = useDownloadCanvas();

  const download = () => {
    downloadPNG("canvas");
  };

  return (
    <div className="flex flex-row items-center justify-evenly bg-[# bg-[#46494c]">
      <div className="flex flex-row items-center justify-center w-3/6">
        <ColorPicker />
        <PaletteHistory />
        <button
          disabled={isDownloading}
          onClick={download}
          className="size-16 "
        >
          <GrDownload
            size="2rem"
            color={isDownloading ? "gray" : "white"}
            cursor={isDownloading ? "wait" : "pointer"}
          />
        </button>
      </div>
    </div>
  );
};

export default MenuPage;
