import classes from './config.module.scss';
import React, { useRef, useEffect, useState, Fragment } from 'react';
import * as fabric from 'fabric';
import { useSelector } from 'react-redux';

const loadImage = (setImageDimensions, imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  img.onload = () => {
    setImageDimensions({
      height: img.height,
      width: img.width,
      img: img,
    });
  };
  img.onerror = (err) => {
    console.log('img not found');
    setImageDimensions({});
  };
};

interface ConfigProps {
  productImageUrl: string;
  toPX?: number;
}

const Config: React.FC<ConfigProps> = ({
  productImageUrl,

  toPX = 4.3,
}) => {
  const [frameDimensions, setFrameDimensions] = useState({});
  const [linerDimensions, setLinerDimensions] = useState({});

  const [frameLoaderCounter, setFrameLoaderCounter] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(0);
  const selectedFrame = useSelector(selectFrame);
  const selectedLiner = useSelector(selectLiner);

  useEffect(() => {
    if (selectedFrame) {
      loadImage(setFrameDimensions, selectedFrame.side_image.url);
    }
  }, [selectedFrame]);

  useEffect(() => {
    if (selectedLiner) {
      loadImage(setLinerDimensions, selectedLiner.side_image.url);
    }
  }, [selectedLiner]);

  const variantData = variant.data;
  let imageWidth = parseInt(variantData.paper_width) * toPX;
  let imageHeight = parseInt(variantData.paper_height) * toPX;
  const maxSize = Math.max(imageWidth, imageHeight);
  const minSize = Math.min(imageWidth, imageHeight);

  if (variant.defaultOrientation && variant.isEitherOrientation) {
    if (variant.defaultOrientation === 360) {
      imageHeight = minSize;
      imageWidth = maxSize;
    } else {
      imageHeight = maxSize;
      imageWidth = minSize;
    }
  }
  const frameHeight =
    selectedFrame && selectedFrame.width
      ? parseFloat(selectedFrame.width) * toPX
      : 0;
  const linerHeight =
    selectedLiner && selectedLiner.width
      ? parseFloat(selectedLiner.width) * toPX
      : 0;

  //References
  const mainImageRef = useRef();
  const canvasRef = useRef();
  console.log('mainImageRef.current', mainImageRef.current);
  //TO DO: include frame and liner too TO DO: toPX === 3.25 ?? make better

  let imgMarginBottom = toPX === 4.3 ? 181 : 0;

  useEffect(() => {
    const frameAndLinerHeight = frameHeight + linerHeight;
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

    if (selectedFrame && Object.keys(frameDimensions).length !== 0) {
      var imgInstance = new fabric.Image(frameDimensions.img, {}).scaleToHeight(
        frameHeight
      );

      const actualFrameWidth =
        frameDimensions.width / (frameDimensions.height / frameHeight) - 1;

      const frameSideDuplicatorY =
        Math.floor(canvas.height / actualFrameWidth) + 1;
      const frameSideDuplicatorX =
        Math.floor(canvas.width / actualFrameWidth) + 1;

      // Liner
      if (selectedLiner && Object.keys(linerDimensions).length !== 0) {
        var imgInstanceLiner = new fabric.Image(
          linerDimensions.img,
          {}
        ).scaleToHeight(linerHeight);
        const actualLinerWidth =
          linerDimensions.width / (linerDimensions.height / linerHeight) - 1;

        const linerSideDuplicatorY =
          Math.floor(canvas.height / actualLinerWidth) + 1;
        const linerSideDuplicatorX =
          Math.floor(canvas.width / actualLinerWidth) + 1;

        const clipPolygonLiner = new fabric.Group([
          new fabric.Polygon(
            [
              { x: 0, y: 0 }, //Top-left
              { x: imgInstanceLiner.width, y: 0 }, //Top -right
              { x: imgInstanceLiner.width, y: imgInstanceLiner.height },
              { x: imgInstanceLiner.height, y: imgInstanceLiner.height },
            ],
            {
              originX: 'center',
              originY: 'center',
              left: 0,
              top: 0,
            }
          ),
        ]);

        const clipPolygonPatchLiner = new fabric.Group([
          new fabric.Polygon(
            [
              { x: 0, y: 0 },
              { x: imgInstanceLiner.height, y: imgInstanceLiner.height },
              { x: imgInstanceLiner.height, y: 0 },
            ],
            {
              originX: 'left',
              originY: 'center',
              left: -imgInstanceLiner.width + imgInstanceLiner.width / 2,
              top: 0,
            }
          ),
        ]);

        // LINER LEFT SIDE
        for (let index = 0; index < linerSideDuplicatorY; index++) {
          canvas.add(
            new fabric.Image(linerDimensions.img, {
              top:
                canvasHeight -
                actualLinerWidth / 2 -
                actualLinerWidth * index -
                (index === 0 ? frameHeight : 0),
              left: frameHeight + linerHeight / 2,
              originX: 'center',
              originY: 'center',
              clipPath: index === 0 && clipPolygonLiner,
              flipX: index % 2 === 1,
            })
              .scaleToHeight(linerHeight)
              .rotate(270)
          );
        }

        // LINER TOP SIDE
        for (let index = 0; index < linerSideDuplicatorX; index++) {
          canvas.add(
            new fabric.Image(linerDimensions.img, {
              top: frameHeight,
              left: actualLinerWidth * index + (index === 0 ? frameHeight : 0),
              flipX: index % 2 === 1,
              clipPath: index === 0 && clipPolygonLiner,
            }).scaleToHeight(linerHeight)
          );
        }

        // LINER RIGHT SIDE
        for (let index = 0; index < linerSideDuplicatorY; index++) {
          canvas.add(
            new fabric.Image(linerDimensions.img, {
              top: actualLinerWidth * index + (index === 0 ? frameHeight : 0),
              left: canvasWidth - frameHeight - linerHeight / 2,
              originX: 'left',
              originY: 'center',
              flipX: index % 2 === 1,
              clipPath: index === 0 && clipPolygonLiner,
              centeredRotation: false,
            })
              .scaleToHeight(linerHeight)
              .rotate(90)
          );
        }
        // LINER BOTTOM SIDE
        for (let index = 0; index < linerSideDuplicatorX; index++) {
          canvas.add(
            new fabric.Image(linerDimensions.img, {
              top: canvas.height - linerHeight / 2 - frameHeight,
              left:
                canvasWidth -
                actualLinerWidth -
                actualLinerWidth * index -
                (index === 0 ? frameHeight : 0),
              originX: 'left',
              originY: 'center',
              clipPath: index === 0 && clipPolygonLiner,
              flipX: index % 2 === 1,
            })
              .scaleToHeight(linerHeight)
              .rotate(180)
          );
        }

        //Liner Left side Patch
        canvas.add(
          new fabric.Image(linerDimensions.img, {
            top: canvasHeight - actualLinerWidth / 2 - frameHeight - 1,
            left: 0 + linerHeight / 2 + frameHeight,
            originX: 'center',
            originY: 'center',
            clipPath: clipPolygonPatchLiner,
          })
            .scaleToHeight(linerHeight)
            .rotate(270)
        );
      }

      const clipPolygon = new fabric.Group([
        new fabric.Polygon(
          [
            { x: 0, y: 0 }, //Top-left
            { x: imgInstance.width, y: 0 }, //Top -right
            { x: imgInstance.width, y: imgInstance.height },
            { x: imgInstance.height, y: imgInstance.height },
          ],
          {
            originX: 'center',
            originY: 'center',
            left: 0,
            top: 0,
          }
        ),
      ]);

      const clipPolygonPatch = new fabric.Group([
        new fabric.Polygon(
          [
            { x: 0, y: 0 },
            { x: imgInstance.height, y: imgInstance.height },
            { x: imgInstance.height, y: 0 },
          ],
          {
            originX: 'left',
            originY: 'center',
            left: -imgInstance.width + imgInstance.width / 2,
            top: 0,
          }
        ),
      ]);

      // FRAME LEFT SIDE
      for (let index = 0; index < frameSideDuplicatorY; index++) {
        canvas.add(
          new fabric.Image(frameDimensions.img, {
            top: canvasHeight - actualFrameWidth / 2 - actualFrameWidth * index,
            left: 0 + frameHeight / 2,
            originX: 'center',
            originY: 'center',
            clipPath: index === 0 && clipPolygon,
            flipX: index % 2 === 1,
          })
            .scaleToHeight(frameHeight)
            .rotate(270)
        );
      }

      // FRAME TOP SIDE
      for (let index = 0; index < frameSideDuplicatorX; index++) {
        canvas.add(
          new fabric.Image(frameDimensions.img, {
            top: 0,
            left: actualFrameWidth * index,
            flipX: index % 2 === 1,
            clipPath: index === 0 && clipPolygon,
          }).scaleToHeight(frameHeight)
        );
      }

      // FRAME RIGHT SIDE
      for (let index = 0; index < frameSideDuplicatorY; index++) {
        canvas.add(
          new fabric.Image(frameDimensions.img, {
            top: actualFrameWidth * index,
            originX: 'left',
            originY: 'center',
            left: imageWidth + frameHeight + linerHeight * 2 + frameHeight / 2,
            flipX: index % 2 === 1,
            clipPath: index === 0 && clipPolygon,
            centeredRotation: false,
          })
            .scaleToHeight(frameHeight)
            .rotate(90)
        );
      }

      // FRAME BOTTOM SIDE
      for (let index = 0; index < frameSideDuplicatorX; index++) {
        canvas.add(
          new fabric.Image(frameDimensions.img, {
            top: imageHeight + frameHeight + frameHeight / 2 + linerHeight * 2,
            left: canvasWidth - actualFrameWidth - actualFrameWidth * index,
            originX: 'left',
            originY: 'center',
            clipPath: index === 0 && clipPolygon,
            flipX: index % 2 === 1,
          })
            .scaleToHeight(frameHeight)
            .rotate(180)
        );
      }

      //Left side Patch
      // For lon width frames it is a big problem ex: main-side-4.jpg
      canvas.add(
        new fabric.Image(frameDimensions.img, {
          top: canvasHeight - actualFrameWidth / 2 - 1,
          left: 0 + frameHeight / 2,
          originX: 'center',
          originY: 'center',
          clipPath: clipPolygonPatch,
        })
          .scaleToHeight(frameHeight)
          .rotate(270)
      );
    }
  }, [
    selectedFrame,
    selectedLiner,
    variantData,
    toPX,
    linerHeight,
    frameHeight,
    mainImageRef.current,
    canvasRef.current,
    imageLoaded,
    frameLoaderCounter,
    frameDimensions,
    linerDimensions,
  ]);
  return (
    <Fragment>
      <div
        style={{
          visibility: 'hidden',
          position: 'absolute',
          zIndex: -99,
        }}
      >
        <img
          id='cm-main-image'
          ref={mainImageRef}
          src={productImageUrl}
          //onLoad={() => imageOnLoad('mainImg')}
          width={imageWidth}
          style={{ display: 'block' }}
          onLoad={() => setImageLoaded(imageLoaded + 1)}
        />
      </div>

      <canvas
        id='cm-canvas'
        ref={canvasRef}
        className={classes.canvasImage}
        style={{ marginBottom: imgMarginBottom }}
      />
    </Fragment>
  );
};

const MemoizedConfig = React.memo(Config);
export default MemoizedConfig;
