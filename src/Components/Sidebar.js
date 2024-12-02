import React, { useState } from 'react';
import './CustomSidebar.css'; // Import the sidebar styles

function CustomSidebar({ isSidebarOpen, setScreen, toggleSidebar }) {
    const [openSubmenu, setOpenSubmenu] = useState(null); // Track the opened submenu

    // Function to toggle submenu visibility
    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu); // Toggle submenu visibility
    };

    return (
        <div className={`custom-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-content">
                <ul>
                    {/* Dashboard Menu Item */}
                    <li onClick={() => { setScreen('dashboard'); toggleSidebar(); }}>
                        <i className="fas fa-tachometer-alt"></i> Dashboard
                    </li>

                    {/* System Architecture Menu with Submenu */}
                    <li onClick={() => toggleSubmenu('system-architecture')}>
                        <i className="fas fa-cogs"></i> System Architecture
                        <i className={`fa ${openSubmenu === 'system-architecture' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </li>
                    {openSubmenu === 'system-architecture' && (
                        <ul className="submenu">
                            <li onClick={() => { setScreen('process-flow'); toggleSidebar(); }}>Process Flow</li>
                            <li onClick={() => { setScreen('environment-strategy '); toggleSidebar(); }}>Environment Strategy</li>
                        </ul>
                    )}

                    {/* LOB App Modernization */}
                    <li onClick={() => toggleSubmenu('lob-modernization')}>
                        <i className="fas fa-user"></i> LOB App Modernization
                        <i className={`fa ${openSubmenu === 'lob-modernization' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </li>
                    {openSubmenu === 'lob-modernization' && (
                        <ul className="submenu">
                            <li onClick={() => { setScreen('d-lob-modernization-app'); toggleSidebar(); }}>LOB Modernization App Diagram</li>
                            <li onClick={() => { setScreen('cbc-data-pooling-through-dataflows'); toggleSidebar(); }}>Data Pooling Through Dataflows</li>
                            <li onClick={() => { setScreen('cbc-data-pooling-through-automate'); toggleSidebar(); }}>Data Pooling Through Automate Flows</li>
                            <li onClick={() => { setScreen('v-data-flows-and-power-automate'); toggleSidebar(); }}>Data Flows and Power Automate Video</li>
                            <li onClick={() => { setScreen('cbc-lob-modernization-hr-app'); toggleSidebar(); }}>LOB Modernization HR App</li>
                            <li onClick={() => { setScreen('v-lob-modernization-app'); toggleSidebar(); }}>LOB Modernization App Video</li>
                        </ul>
                    )}

                    {/* ALM */}
                    <li onClick={() => toggleSubmenu('alm')}>
                        <i className="fas fa-cogs"></i> Application Lifecycle Management
                        <i className={`fa ${openSubmenu === 'alm' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </li>
                    {openSubmenu === 'alm' && (
                        <ul className="submenu">
                            <li onClick={() => { setScreen('d-alm-processes-enterprise-apps'); toggleSidebar(); }}>ALM Processes Diagram</li>
                            <li onClick={() => { setScreen('cbc-alm-processes-enterprise-apps'); toggleSidebar(); }}>Click-by-Click ALM Processes</li>
                            <li onClick={() => { setScreen('v-alm-processes-enterprise-apps'); toggleSidebar(); }}>ALM Processes Video</li>
                        </ul>
                    )}

                    {/* Customizations */}
                    <li onClick={() => toggleSubmenu('customizations')}>
                        <i className="fas fa-pen"></i> Customizations
                        <i className={`fa ${openSubmenu === 'customizations' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </li>
                    {openSubmenu === 'customizations' && (
                        <ul className="submenu">
                            <li onClick={() => { setScreen('d-customizations-apps-data'); toggleSidebar(); }}>Customizations Diagram</li>
                            <li onClick={() => { setScreen('cbc-customizations-apps-data'); toggleSidebar(); }}>Click-by-Click Customizations</li>
                            <li onClick={() => { setScreen('v-customizations-apps-data'); toggleSidebar(); }}>Customizations Video</li>
                        </ul>
                    )}

                    {/* AI Builder */}
                    <li onClick={() => toggleSubmenu('ai-builder')}>
                        <i className="fas fa-robot"></i> AI Builder
                        <i className={`fa ${openSubmenu === 'ai-builder' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </li>
                    {openSubmenu === 'ai-builder' && (
                        <ul className="submenu">
                            <li onClick={() => { setScreen('d-enterprise-wide-automations'); toggleSidebar(); }}>AI Builder Diagram</li>
                            <li onClick={() => { setScreen('cbc-invoice-processing'); toggleSidebar(); }}>Click-by-Click AI Builder</li>
                            <li onClick={() => { setScreen('v-invoice-processing'); toggleSidebar(); }}>AI Builder Video</li>
                            <li onClick={() => { setScreen('cbc-cancelled-checks-verification-for-pro-devs'); toggleSidebar(); }}>Cancelled Checks Verification For Pro Devs</li>
                            <li onClick={() => { setScreen('v-cancelled-checks-verification-for-pro-devs'); toggleSidebar(); }}>Cancelled Checks Verification Video</li>
                            <li onClick={() => { setScreen('cbc-hr-performance-insights-for-pro-devs'); toggleSidebar(); }}>Hr Performance Insights</li>
                            <li onClick={() => { setScreen('cbc-sentiment-analysis-for-performance-scoring'); toggleSidebar(); }}>Sentiment Analysis For Performance Scoring</li>
                            <li onClick={() => { setScreen('v-sentiment-analysis-for-performance-scoring'); toggleSidebar(); }}>Sentiment Analysis Video</li>
                        </ul>
                    )}

                    {/* Sales Video */}
                    <li onClick={() => { setScreen('sales-video'); toggleSidebar(); }}>
                        <i className="fas fa-video"></i> Sales Video
                    </li>

                    {/* Finale Video */}
                    <li onClick={() => { setScreen('finale-video'); toggleSidebar(); }}>
                        <i className="fas fa-video"></i> Finale Video
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CustomSidebar;
