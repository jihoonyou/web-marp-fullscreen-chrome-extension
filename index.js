function goFullscreen() {
    chrome.tabs.executeScript({
        file: "fullscreen.js",
    });
    
} 

document.querySelector('#start-presentation-button').addEventListener('click', goFullscreen);

