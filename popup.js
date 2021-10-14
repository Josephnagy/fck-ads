console.log('inside popup.js');

document.addEventListener("DOMContentLoaded", function () {
    console.log('inside event listener');

    // speed up video 
    document.getElementById("startButton").addEventListener("click", async () =>{
        console.log("fcking ad");
        console.log()
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        console.log(tab);

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: fckAd,
        });

    });
    
    // return to normal speed 
    document.getElementById("stopButton").addEventListener("click", async () => {
        console.log("un-fcking ad");
        console.log()
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        console.log(tab);

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: unFckAd,
        });

    });


});

function fckAd() {
    console.log("speeding up");

    let arr = Array.prototype.slice.call(document.getElementsByTagName("video"))
    arr.map(ele => ele.playbackRate = 16); 

    console.log("finished speeding up");
};

function unFckAd() {
    console.log("slowing down");

    let arr = Array.prototype.slice.call(document.getElementsByTagName("video"))
    arr.map(ele => ele.playbackRate = 1);

    console.log("finished slowing up");
};

