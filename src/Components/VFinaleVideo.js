import React from "react";
import powerauto from '../assets/9. Finale Video - L400 - Power Platform.mp4' // Assuming you have a separate CSS file for styles

function VFinaleVideo() {
  return (
   
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          <div className="video-container">
            <video autoPlay muted controls>
              <source
                src={powerauto}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    
  );
}

export default VFinaleVideo;

