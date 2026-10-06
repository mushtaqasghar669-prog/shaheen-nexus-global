// ShaheenNexus Google AdSense Configuration Manager
(function() {
    const pubId = "ca-pub-2057536839831582";
    console.log("ShaheenNexus AdSense initialized with Publisher ID: " + pubId);
    
    // Check if Ad-Free Pro Pass is active
    const isProActive = localStorage.getItem('shaheen_nexus_pro') === 'true';
    if(isProActive) {
        const adSlots = document.querySelectorAll('.adsense-slot');
        adSlots.forEach(slot => {
            slot.style.display = 'none';
        });
        console.log("Pro Pass active: Ad slots hidden.");
    }
})();

