import React, { useEffect, useRef, useState } from "react";
import "./ImageConfig.css";
import productImageUrl from "../../assets/bird.jpg";
import { fabric } from "fabric";

const ImageConfig = () => {
  let toPX = 4.3;
  const imageWidth = 100;
  const imageHeight = 60;
  const frameHeight = 20;

  const [imageLoaded, setImageLoaded] = useState(0);

  const frames = import.meta.glob("./frames/frame*.webp", {
    eager: true,
    import: "default",
  });

  const getFrame = (num: number) => frames[`./frames/frame${num}.webp`];
  const mainImageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const frameAndLinerHeight = frameHeight;
    /** Canvas */
    const canvas = new fabric.StaticCanvas(canvasRef.current, {
      width: imageWidth + frameAndLinerHeight * 2,
      height: imageHeight + frameAndLinerHeight * 2,
    });
    canvas.add(
      new fabric.Image(mainImageRef.current, {
        top: frameAndLinerHeight,
        left: frameAndLinerHeight,
      })
        .scaleToWidth(imageWidth)
        .scaleToHeight(imageHeight)
    );

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
  }, [imageLoaded]);

  return (
    <div className="imageConfigRoot">
      <div className="imageConfigWall">
        <div
          style={{
            visibility: "hidden",
            position: "absolute",
            zIndex: -99,
          }}
        >
          <img
            id="cm-main-image"
            ref={mainImageRef}
            src={productImageUrl}
            //onLoad={() => imageOnLoad('mainImg')}
            width={imageWidth}
            style={{ display: "block" }}
            onLoad={() => setImageLoaded(imageLoaded + 1)}
          />
        </div>

        <canvas
          id="cm-canvas"
          ref={canvasRef}
          className={"canvasImage"}
          // style={{ marginBottom: imgMarginBottom }}
        />
      </div>

      <div className="imageConfigControls" style={{ overflow: "hidden" }}>
        controls
        <img src={getFrame(6)} height={10} />
      </div>
    </div>
  );
};

export default ImageConfig;
