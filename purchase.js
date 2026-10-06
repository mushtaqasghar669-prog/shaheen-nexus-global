// ShaheenNexus Pro Pass & In-App Purchase Handler
function activateProPass() {
    localStorage.setItem('shaheen_nexus_pro', 'true');
    const proOutput = document.getElementById('proOutput');
    if(proOutput) {
        proOutput.innerText = "Pro Status: SUCCESS! Ad-Free Pro Pass is now active on your browser.";
        proOutput.style.color = "#10b981";
    }
    
    // Hide ads immediately
    document.querySelectorAll('.adsense-slot').forEach(slot => {
        slot.style.display = 'none';
    });
    
    alert("Mubarak ho! Aapka ShaheenNexus Pro Pass successfully activate ho gaya hai.");
}

window.addEventListener('DOMContentLoaded', () => {
    const isProActive = localStorage.getItem('shaheen_nexus_pro') === 'true';
    const proOutput = document.getElementById('proOutput');
    if(isProActive && proOutput) {
        proOutput.innerText = "Pro Status: Active (Ad-Free & Unlimited Vault)";
        proOutput.style.color = "#10b981";
    }
});

