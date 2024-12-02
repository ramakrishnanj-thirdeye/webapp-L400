import React, { useEffect, useState } from "react";
import "./CustomSidebar.css"; // Import the updated sidebar styles

function CustomSidebar({ isSidebarOpen, setScreen, toggleSidebar, activeScreen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null); // Track the opened submenu

  // Function to toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu visibility
  };

  useEffect(() => {
    if (['process-flow', 'environment-strategy'].includes(activeScreen)) {
      console.log("active screen",activeScreen)
      setOpenSubmenu('system-architecture');
    } else if (
      ['d-lob-modernization-app', 'cbc-data-pooling-through-dataflows', 'cbc-data-pooling-through-automate', 'v-data-flows-and-power-automate', 'cbc-lob-modernization-hr-app','v-lob-modernization-app' ].includes(activeScreen)
    ) {
      setOpenSubmenu('lob-modernization');
    } else if (
      ['d-alm-processes-enterprise-apps', 'cbc-alm-processes-enterprise-apps', 'v-alm-processes-enterprise-apps'].includes(activeScreen)
    ) {
      setOpenSubmenu('alm');
    } else if (
      ['d-customizations-apps-data', 'cbc-customizations-apps-data', 'v-customizations-apps-data'].includes(activeScreen)
    ) {
      setOpenSubmenu('customizations');
    } else if (
      ['d-enterprise-wide-automations', 'cbc-invoice-processing', 'v-invoice-processing', 'cbc-cancelled-checks-verification-for-pro-devs', 'v-cancelled-checks-verification-for-pro-devs', 'cbc-hr-performance-insights-for-pro-devs', 'cbc-sentiment-analysis-for-performance-scoring','v-sentiment-analysis-for-performance-scoring'].includes(activeScreen)
    ) {
      setOpenSubmenu('ai-builder');
    } else {
      setOpenSubmenu(null);
    }
  }, [activeScreen]);


  return (
    <div className={`custom-sidebar ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="sidebar-content">
        <ul>
          {/* Dashboard Menu Item */}
          <li
            className={`menu-item ${activeScreen === "dashboard" ? "active" : ""}`}
            onClick={() => {
              setScreen("dashboard");
              toggleSidebar();
            }}
          >
            <i className="fas fa-home-alt"></i> Home
          </li>

          {/* System Architecture Menu with Submenu */}
          <li className="menu-item" onClick={() => toggleSubmenu("system-architecture")}>
            <i className="fa-solid fa-chart-diagram"></i> System Architecture
            <i
              className={`submenu-icon ${openSubmenu === "system-architecture" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "system-architecture" && (
            <ul className="submenu">
             
              <li
                className={`submenu-item ${activeScreen === "process-flow" ? "active" : ""}`}
                onClick={() => {
                  setScreen("process-flow");
                  toggleSidebar();
                }}
              >
                Process Flow
              </li>


              <li
                className={`submenu-item ${activeScreen === "environment-strategy" ? "active" : ""}`}
                onClick={() => {
                  setScreen("environment-strategy");
                  toggleSidebar();
                }}
              >
                Workflow Overview
              </li>
            </ul>
          )}


          {/* LOB App Modernization */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("lob-modernization")}
          >
            <i class="fa-solid fa-tablet-screen-button"></i> LOB App Modernization
            <i
              className={`submenu-icon ${openSubmenu === "lob-modernization" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "lob-modernization" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "d-lob-modernization-app" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("d-lob-modernization-app");
                  toggleSidebar();
                }}
              >
                LOB Modernization App Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-data-pooling-through-dataflows" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-data-pooling-through-dataflows");
                  toggleSidebar();
                }}
              >
                Data Pooling Through Dataflows
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-data-pooling-through-automate" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-data-pooling-through-automate");
                  toggleSidebar();
                }}
              >
                Data Pooling Through Automate Flows
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-data-flows-and-power-automate" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("v-data-flows-and-power-automate");
                  toggleSidebar();
                }}
              >
                Data Flows and Power Automate Video
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-lob-modernization-hr-app" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-lob-modernization-hr-app");
                  toggleSidebar();
                }}
              >
                LOB Modernization HR App
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-lob-modernization-app" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("v-lob-modernization-app");
                  toggleSidebar();
                }}
              >
                LOB Modernization App Video
              </li>
            
            </ul>
          )}


           {/* ALM */}
           <li
            className="menu-item"
            onClick={() => toggleSubmenu('alm')}
          >
            <i class="fa-solid fa-arrows-spin"></i> 
            Application Lifecycle Management
            <i
              className={`submenu-icon ${openSubmenu === "alm" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "alm" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "d-alm-processes-enterprise-apps" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("d-alm-processes-enterprise-apps");
                  toggleSidebar();
                }}
              >
                ALM Processes Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-alm-processes-enterprise-apps" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-alm-processes-enterprise-apps");
                  toggleSidebar();
                }}
              >
               Click-by-Click ALM Processes
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-alm-processes-enterprise-apps" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("v-alm-processes-enterprise-apps");
                  toggleSidebar();
                }}
              >
                ALM Processes Video
              </li>
           
            </ul>
          )}

          {/* Customizations */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu('customizations')}
          >
            <i class="fa-solid fa-database"></i>
            Customization Apps and Data
            <i
              className={`submenu-icon ${openSubmenu === "customizations" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "customizations" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "d-customizations-apps-data" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("d-customizations-apps-data");
                  toggleSidebar();
                }}
              >
                Customizations Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-customizations-apps-data" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-customizations-apps-data");
                  toggleSidebar();
                }}
              >
               Click-by-Click Customizations
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-customizations-apps-data" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("v-customizations-apps-data");
                  toggleSidebar();
                }}
              >
                Customizations Video
              </li>
           
            </ul>
          )}


          {/* AI Builder */}
          <li
            className="menu-item"
            onClick={() => toggleSubmenu("ai-builder")}
          >
            <i class="fa-solid fa-robot"></i> AI Builder
            <i
              className={`submenu-icon ${openSubmenu === "ai-builder" ? "fa-chevron-up" : "fa-chevron-down"
                } fa`}
            ></i>
          </li>
          {openSubmenu === "ai-builder" && (
            <ul className="submenu">
              <li
                className={`submenu-item ${activeScreen === "d-enterprise-wide-automations" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("d-enterprise-wide-automations");
                  toggleSidebar();
                }}
              >
                AI Builder Diagram
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-invoice-processing" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-invoice-processing");
                  toggleSidebar();
                }}
              >
                Click-by-Click AI Builder
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-invoice-processing" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("v-invoice-processing");
                  toggleSidebar();
                }}
              >
                AI Builder Video
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-cancelled-checks-verification-for-pro-devs" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-cancelled-checks-verification-for-pro-devs");
                  toggleSidebar();
                }}
              >
                Cancelled Checks Verification For Pro Devs
              </li>
              <li
                className={`submenu-item ${activeScreen === "v-cancelled-checks-verification-for-pro-devs" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("v-cancelled-checks-verification-for-pro-devs");
                  toggleSidebar();
                }}
              >
                Cancelled Checks Verification Video
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-hr-performance-insights-for-pro-devs" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-hr-performance-insights-for-pro-devs");
                  toggleSidebar();
                }}
              >
                Hr Performance Insights
              </li>
              <li
                className={`submenu-item ${activeScreen === "cbc-sentiment-analysis-for-performance-scoring" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("cbc-sentiment-analysis-for-performance-scoring");
                  toggleSidebar();
                }}
              >
                Sentiment Analysis For Performance Scoring
              </li><li
                className={`submenu-item ${activeScreen === "v-sentiment-analysis-for-performance-scoring" ? "active" : ""
                  }`}
                onClick={() => {
                  setScreen("v-sentiment-analysis-for-performance-scoring");
                  toggleSidebar();
                }}
              >
                Sentiment Analysis Video
              </li>
    
            </ul>
          )}
          {/* Sales Video Menu Item */}
          <li 
            className={`menu-item ${activeScreen === "v-salesvideo" ? "active" : ""}`}
            onClick={() => { setScreen('v-salesvideo'); toggleSidebar() }}>
            <i className="fas fa-video"></i> Sales Video
          </li>

          {/* Finale Video Menu Item */}
          <li 
            className={`menu-item ${activeScreen === "v-finalevideo" ? "active" : ""}`}
            onClick={() => { setScreen('v-finalevideo'); toggleSidebar() }}>
            <i className="fas fa-video"></i> Finale Video
          </li>

        </ul>

      </div>
    </div>
  );
}

export default CustomSidebar;



