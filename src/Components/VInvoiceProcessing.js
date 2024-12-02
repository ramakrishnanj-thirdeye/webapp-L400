import React from "react";
import powerauto from '../assets/5. Microsoft Power Platform-Invoice processing.mp4' // Assuming you have a separate CSS file for styles

function VInvoiceProcessing() {
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

export default VInvoiceProcessing;

