import { createRef, useEffect } from "react";
import { useScreenshot } from "use-react-screenshot";
import { saveAs } from "file-saver";

export const useTakeScreenShot = () => {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => {
    takeScreenshot(ref.current);
  };

  useEffect(() => {
    if (image) {
      fetch(image)
        .then((data) => data.blob())
        .then((blob) => {
          let file = new File([blob], "K&A-Invitacion.png", {
            type: "image:png",
          });

          saveAs(file);
        })
        .catch((e) => console.log(e));
    }
  }, [image]);

  return {
    ref,
    takeSS: getImage,
    image,
  };
};
