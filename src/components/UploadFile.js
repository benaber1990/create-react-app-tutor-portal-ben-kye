import React from "react";
import "./Components.css";

function UploadFile() {
  return (
    <div className="UploadFile">
      <p
        style={{
          fontSize: 24,
        }}
      >
        Upload Your Work
      </p>
      <div
        style={{
          textAlign: "center",
          marginTop: -10,
        }}
      >
        <div>
          <p>Click here to submit</p>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
