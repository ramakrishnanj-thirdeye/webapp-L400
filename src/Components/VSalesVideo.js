import React from "react";

function VSalesVideo() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        <div className="video-container">
          <video autoPlay muted controls>
            <source
              src="https://stdemoassets.blob.core.windows.net/videos/L400/8.%20Sales%20video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default VSalesVideo;
