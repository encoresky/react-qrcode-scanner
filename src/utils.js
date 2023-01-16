export const isMediaDevicesSupported = () => {
    const isMediaDevicesSupported =
      typeof navigator !== "undefined" && !!navigator.mediaDevices;
  
    if (!isMediaDevicesSupported) {
      console.warn(
        `[@encoreskytech/react-qr-scanner]: MediaDevices API has no support for your browser. You can fix this by running "npm i webrtc-adapter"`
      );
    }
  
    return isMediaDevicesSupported;
  };
  
  export const isValidType = (value, name, type) => {
    const isValid = typeof value === type;  
    if (!isValid) {
      console.warn(
        `[@encoreskytech/react-qr-scanner]: Expected "${name}" to be a of type "${type}".`
      );
    }
  
    return isValid;
  };
  