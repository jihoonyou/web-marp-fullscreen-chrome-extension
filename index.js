function goFullscreen() {
    chrome.tabs.executeScript({
        file: "fullscreen.js",
    });
    
} 

document.querySelector('#yo').addEventListener('click', goFullscreen)

