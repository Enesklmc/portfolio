const images = [
  "r2.jpeg",
  "pos.jpeg",
  "at.jpeg",
  "sbl.jpeg",
  "r1.jpeg",
  "wez.jpeg",
];
const imagesBig = ["pa.jpeg", "pay.jpeg"];

export default function ShowcaseImages() {
  return (
    <>
      <div className="screenshotsGridBig">
        {imagesBig.map((img) => (
          <img key={img} src={`/screenshots/${img}`} alt="" />
        ))}
      </div>
      <div className="screenshotsGrid">
        {images.map((img) => (
          <img key={img} src={`/screenshots/${img}`} alt="" />
        ))}
      </div>
    </>
  );
}
