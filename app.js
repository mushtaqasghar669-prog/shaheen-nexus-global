// ==========================================
// ShaheenNexus - Core Application Logic (app.js)
// Developed under Shine Empire
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log("ShaheenNexus App Initialized Successfully.");

    // Check user Pro / Ad-Free status on load
    checkProStatus();

    // Initialize UI event handlers and buttons
    initEventListeners();
});

// Function to check if user purchased the Ad-Free Pro Pass
function checkProStatus() {
    const isPro = localStorage.getItem('shaheen_nexus_pro') === 'true';
    
    if (isPro) {
        console.log("Active Ad-Free Pro Pass detected. Hiding advertisements.");
        hideAllAds();
    } else {
        console.log("Free User Mode: AdSense banners enabled.");
    }
}

// Function to hide ads dynamically if Pro Pass is active
function hideAllAds() {
    const adContainers = document.querySelectorAll('.adsense-banner, ins.adsbygoogle');
    adContainers.forEach(ad => {
        ad.style.display = 'none';
    });
}

// Event Listeners for interactive modules
function initEventListeners() {
    // Legacy Vault Button Click Action
    const vaultBtn = document.querySelector('a[href="#vault"]');
    if (vaultBtn) {
        vaultBtn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerModule('Digital Legacy & Will Vault', 'Secure end-to-end encryption vault is being initialized for your assets...');
        });
    }

    // Global Problem-Solving Network Button Click Action
    const networkBtn = document.querySelector('a[href="#network"]');
    if (networkBtn) {
        networkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerModule('Global Problem-Solving Network', 'Connecting you with live peer nodes and expert problem-solvers worldwide...');
        });
    }

    // Micro-Agreement Trusts Button Click Action
    const agreementBtn = document.querySelector('a[href="#agreements"]');
    if (agreementBtn) {
        agreementBtn.addEventListener('click', (e) => {
            e.preventDefault();
            triggerModule('Micro-Agreement Trusts', 'Opening secure peer-to-peer contract drafting portal...');
        });
    }
}

// Helper function to simulate module loading
function triggerModule(moduleName, message) {
    alert(`[${moduleName}]\n${message}`);
}

