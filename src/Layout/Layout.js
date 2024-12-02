import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import ProcessFlow from '../Components/ProcessFlow';
import CustomSidebar from '../Components/Sidebar';

import EnvironmentStrategy from '../Components/EnvironmentStrategy';
import DLOBmodernizationApp from '../Components/DLOBmodernizationApp';
import CBCDataPoolingThroughDataflows from '../Components/CBCDataPoolingThroughDataflows';
import CBCDataPoolingThroughAutomate from '../Components/CBCDataPoolingThroughAutomate';
import VDataFlowsAndPowerAutomate from '../Components/VDataFlowsAndPowerAutomate';
import CBCLOBmodernizationHRApp from '../Components/CBCLOBmodernizationHRApp';
import VLOBmodernizationApp from '../Components/VLOBmodernizationApp';

import DALMProcessesEnterpriseApps from '../Components/DALMProcessesEnterpriseApps';
import CBCALMProcessesEnterpriseApps from '../Components/CBCALMProcessesEnterpriseApps';
import VALMProcessesEnterpriseApps from '../Components/VALMProcessesEnterpriseApps';

import DCustomizationsAppsData from '../Components/DCustomizationsAppsData';
import CBCCustomizationsAppsData from '../Components/CBCCustomizationsAppsData';
import VCustomizationsAppsData from '../Components/VCustomizationsAppsData';

import DEnterpriseWideAutomations from '../Components/DEnterpriseWideAutomations';
import CBCInvoiceProcessing from '../Components/CBCInvoiceProcessing';
import VInvoiceProcessing from '../Components/VInvoiceProcessing';

import CBCCancelledChecksVerificationforProDevs from '../Components/CBCCancelledChecksVerificationforProDevs';
import VCancelledChecksVerificationforProDevs from '../Components/VCancelledChecksVerificationforProDevs';

import CBCHRPerformanceInsightsforProDevs from '../Components/CBCHRPerformanceInsightsforProDevs';
import CBCSentimentAnalysisforPerformanceScoring from '../Components/CBCSentimentAnalysisforPerformanceScoring';
import VSentimentAnalysisforPerformanceScoring from '../Components/VSentimentAnalysisforPerformanceScoring';

import VSalesVideo from '../Components/VSalesVideo';
import VFinaleVideo from '../Components/VFinaleVideo';

const screens = [
    'dashboard',
    'process-flow',
    'environment-strategy',
    'd-lob-modernization-app',
    'cbc-data-pooling-through-dataflows',
    'cbc-data-pooling-through-automate',
    'v-data-flows-and-power-automate',
    'cbc-lob-modernization-hr-app',
    'v-lob-modernization-app',
    'd-alm-processes-enterprise-apps',
    'cbc-alm-processes-enterprise-apps',
    'v-alm-processes-enterprise-apps',
    'd-customizations-apps-data',
    'cbc-customizations-apps-data',
    'v-customizations-apps-data',
    'd-enterprise-wide-automations',
    'cbc-invoice-processing',
    'v-invoice-processing',
    'cbc-cancelled-checks-verification-for-pro-devs',
    'v-cancelled-checks-verification-for-pro-devs',
    'cbc-hr-performance-insights-for-pro-devs',
    'cbc-sentiment-analysis-for-performance-scoring',
    'v-sentiment-analysis-for-performance-scoring',
    'v-salesvideo',
    'v-finalevideo',
];

function Layout() {
    // State variables
    const [screen, setScreen] = useState('dashboard'); // Default screen
    const [step, setStep] = useState(0); // Step tracker
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle
    const [history, setHistory] = useState([]); // Navigation history
    const [isBackHovered, setIsBackHovered] = useState(false); // Back button hover state
    const [isPlayHovered, setIsPlayHovered] = useState(false); // Play button hover state


    // Effect to update step when screen changes
    useEffect(() => {
        const currentStep = screens.indexOf(screen);
        if (currentStep !== -1) {
            setStep(currentStep);
        }
    }, [screen]);

    // Navigate to the next screen
    const handlePlayButtonClick = () => {
        const nextStep = (step + 1) % screens.length;
        setHistory([...history, screen]);
        setScreen(screens[nextStep]);
    };

    // Handle sidebar menu clicks
    const handleSidebarMenuClick = (newScreen) => {
        if (newScreen !== screen) {
            setHistory([...history, screen]);
            setScreen(newScreen);
        }
    };

     // Navigate back to the previous screen
     const handleBackButtonClick = () => {
        if (history.length > 0) {
            const previousScreen = history[history.length - 1];
            setHistory(history.slice(0, -1));
            setScreen(previousScreen);
        }
    };


    const renderScreen = () => {
        switch (screen) {
            case 'dashboard':
                return <Home />;
            case 'process-flow':
                return <ProcessFlow />;
            case 'environment-strategy':
                return <EnvironmentStrategy />;
            case 'd-lob-modernization-app':
                return <DLOBmodernizationApp />;
            case 'cbc-data-pooling-through-dataflows':
                return <CBCDataPoolingThroughDataflows />;
            case 'cbc-data-pooling-through-automate':
                return <CBCDataPoolingThroughAutomate />;
            case 'v-data-flows-and-power-automate':
                return <VDataFlowsAndPowerAutomate />;
            case 'cbc-lob-modernization-hr-app':
                return <CBCLOBmodernizationHRApp />;
            case 'v-lob-modernization-app':
                return <VLOBmodernizationApp />;
            case 'd-alm-processes-enterprise-apps':
                return <DALMProcessesEnterpriseApps />;
            case 'cbc-alm-processes-enterprise-apps':
                return <CBCALMProcessesEnterpriseApps />;
            case 'v-alm-processes-enterprise-apps':
                return <VALMProcessesEnterpriseApps />;
            case 'd-customizations-apps-data':
                return <DCustomizationsAppsData />;
            case 'cbc-customizations-apps-data':
                return <CBCCustomizationsAppsData />;
            case 'v-customizations-apps-data':
                return <VCustomizationsAppsData />;
            case 'd-enterprise-wide-automations':
                return <DEnterpriseWideAutomations />;
            case 'cbc-invoice-processing':
                return <CBCInvoiceProcessing />;
            case 'v-invoice-processing':
                return <VInvoiceProcessing />;
            case 'cbc-cancelled-checks-verification-for-pro-devs':
                return <CBCCancelledChecksVerificationforProDevs />;
            case 'v-cancelled-checks-verification-for-pro-devs':
                return <VCancelledChecksVerificationforProDevs />;
            case 'cbc-hr-performance-insights-for-pro-devs':
                return <CBCHRPerformanceInsightsforProDevs />;
            case 'cbc-sentiment-analysis-for-performance-scoring':
                return <CBCSentimentAnalysisforPerformanceScoring />;
            case 'v-sentiment-analysis-for-performance-scoring':
                return <VSentimentAnalysisforPerformanceScoring />;
            case 'v-salesvideo':
                return <VSalesVideo />;
            case 'v-finalevideo':
                return <VFinaleVideo />;
            default:
                return <div>Page Not Found</div>;
        }
    };

    // Toggle the sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <div>
            {/* Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            <div className="layout-container">
                {/* Sidebar */}
                <CustomSidebar
                    setScreen={handleSidebarMenuClick}
                    isSidebarOpen={isSidebarOpen}
                    toggleSidebar={toggleSidebar}
                    activeScreen={screen}
                />

                {/* Main Content Area */}
                <div className="main-content" style={{ position: 'relative' }}>
                    {renderScreen()}

                    {/* Back Button */}
                    <button
                        className="btn btn-secondary back-button"
                        onClick={handleBackButtonClick}
                        onMouseEnter={() => setIsBackHovered(true)}
                        onMouseLeave={() => setIsBackHovered(false)}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '20px',
                            zIndex: 1000,
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '0',
                            backgroundColor: isBackHovered ? 'blue' : '',
                            color: isBackHovered ? 'white' : '',
                            transition: 'background-color 0.3s ease',
                        }}
                    >
                        <i
                            className="fa fa-arrow-left"
                            aria-hidden="true"
                            style={{ fontSize: '12px' }}
                        ></i>
                    </button>

                    {/* Play Button */}
                    <button
                        className="btn btn-secondary play-button"
                        onClick={handlePlayButtonClick}
                        onMouseEnter={() => setIsPlayHovered(true)}
                        onMouseLeave={() => setIsPlayHovered(false)}
                        style={{
                            width: '30px',
                            height: '30px',
                            transition: 'background-color 0.3s ease',
                            backgroundColor: isPlayHovered ? 'blue' : '',
                            color: isPlayHovered ? 'white' : '',
                        }}
                    >
                        <i className="fa fa-play" aria-hidden="true" style={{ fontSize: '12px' }}></i> {step + 1}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Layout;