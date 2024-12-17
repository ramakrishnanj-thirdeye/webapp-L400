import React from "react";

function VInvoiceProcessing() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <div className="video-container">
          <video autoPlay muted controls>
            <source
              src="https://stdemoassets.blob.core.windows.net/videos/L400/5%20AI-Builder-%20Invoice%20processing.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default VInvoiceProcessing;
