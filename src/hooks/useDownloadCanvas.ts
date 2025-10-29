import { useState } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export const useDownloadCanvas = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPNG = (html: string) => {
    setIsDownloading(true);
    try {
      const node = document.getElementById(html);
      htmlToImage
        .toPng(node)
        .then((dataUrl) => download(dataUrl, "my-pixa.png"));
    } catch (error) {
      console.log("An error occured");
    } finally {
      setIsDownloading(false);
    }
  };

  return { isDownloading, downloadPNG };
};
