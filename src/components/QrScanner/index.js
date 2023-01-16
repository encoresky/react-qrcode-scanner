import { useQrReader } from "../../hooks/useQrReader";
import "./index.css";

const QrScanner = ({
  videoContainerStyle,
  videoStyle,
  constraints = {
    facingMode: "user"
  },
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
        className="qr-container"
        style={{
          ...videoContainerStyle
        }}
      >
        <video
          muted
          id={videoId}
          className="qr-video"
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