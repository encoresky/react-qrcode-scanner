import { useRef, useState } from "react";
import "./qr-uploader.css";

const Qruploader = () => {
  const fileRef = useRef(null);
  const [infoText, setInfoText] = useState("Upload QR");

  const fetchRequest = (file, formData) => {

    setInfoText("Scanning QR...");
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
      method: "POST",
      "content-type": "multipart/form-data",
      body: formData
    })
      .then((res) => res.json())
      .then((result) => {
        result = result[0].symbol[0].data;
        console.log(result);
        if (!result) return;
      })
      .catch(() => {
        setInfoText("Couldn't scan QR Code");
      });
  };
  const onFileClick = (e) => {
    if (!e.target.files[0]) return;
    let formData = new FormData();
    formData.append("file", e.target.files[0]);
    fetchRequest(e.target.files[0], formData);
  };
  return (
    <div className="wrapper">
      <input type="file" ref={fileRef} onChange={(e) => onFileClick(e)} />
      <div className="content">
        <i className="fas fa-cloud-upload"></i>
        <p id="upload">{infoText}</p>
      </div>
    </div>
  );
};

export default Qruploader;
