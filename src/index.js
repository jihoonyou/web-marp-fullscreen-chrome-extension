function goFullscreen() {
    chrome.tabs.executeScript({
        file: "fullscreen.js",
    },function() {
        window.close();
    });
    
} 

document.querySelector('#start-presentation-button').addEventListener('click', goFullscreen);

