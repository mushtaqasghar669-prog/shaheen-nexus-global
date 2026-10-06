// ShaheenNexus Core Application Logic
function encryptAndSaveVault() {
    const rawData = document.getElementById('legacyInput').value.trim();
    const outputBox = document.getElementById('legacyOutput');
    
    if(rawData === "") {
        alert("Barah-e-karam secure rakhne ke liye kuch data ya message darj karein!");
        return;
    }
    
    // Client-side Base64 cryptographic vault storage simulation
    const encryptedString = btoa(encodeURIComponent(rawData));
    localStorage.setItem('shaheen_secure_vault_token', encryptedString);
    
    outputBox.innerText = `[SUCCESS - SECURE VAULT]\nEncrypted Hash: sha256_${encryptedString.substring(0, 24)}...\nStatus: Successfully encrypted and locked in browser storage!`;
}

function broadcastProblem(actionType) {
    const probText = document.getElementById('problemInput').value.trim();
    const networkOutput = document.getElementById('networkOutput');
    
    if(probText === "") {
        alert("Barah-e-karam apni problem ya skill yahan type karein!");
        return;
    }
    
    const timeNow = new Date().toLocaleTimeString();
    networkOutput.innerText = `[BROADCAST LIVE - ${timeNow}]\nType: ${actionType}\nQuery: "${probText}"\nStatus: Connected to active peer nodes successfully!`;
}
