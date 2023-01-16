import { useQrReader } from "../../hooks/useQrReader";
import "./QrScanner.css";

const QrScanner = ({
  videoContainerStyle,
  videoStyle,
  constraints = {
    facingMode: "user"
  },
  ViewFinder,
  scanDelay = 500,
  className,
  onResult,
  videoId = "video"
}) => {
  useQrReader({
    constraints,
    scanDelay,
    onResult,
    videoId
  });

  return (
    <section className={className}>
      <div
        className="container"
        style={{
          ...videoContainerStyle
        }}
      >
        {!!ViewFinder && <ViewFinder />}
        <video
          muted
          id={videoId}
          className="video"
          style={{
            ...videoStyle,
            transform: "scaleX(-1)"
          }}
        />
      </div>
    </section>
  );
};
 export default QrScanner