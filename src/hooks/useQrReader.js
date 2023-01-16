import { useEffect, useRef } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";

import { isMediaDevicesSupported, isValidType } from "../utils";

export const useQrReader = ({
  scanDelay: delayBetweenScanAttempts,
  constraints: video,
  onResult,
  videoId
}) => {
  const controlsRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader(null, {
      delayBetweenScanAttempts
    });

    if (
      !isMediaDevicesSupported() &&
      isValidType(onResult, "onResult", "function")
    ) {
      const message =
        'MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"';

      onResult(null, new Error(message), codeReader);
    }

    if (isValidType(video, "constraints", "object")) {
      codeReader
        .decodeFromConstraints({ video }, videoId, (result, error) => {
          if (isValidType(onResult, "onResult", "function")) {
            onResult(result, error, codeReader);
          }
        })
        .then((controls) => (controlsRef.current = controls))
        .catch((error) => {
          if (isValidType(onResult, "onResult", "function")) {
            onResult(null, error, codeReader);
          }
        });
    }

    return () => {
      controlsRef.current?.stop();
    };
  });
};
