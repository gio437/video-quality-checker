chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "hello") {
            sendResponse({farewell: "goodbye"});
            getQuality();
        }
    }
);

// work in progess for detecting current stream quality
// what are you gonna do with the url? how are you gonna get current screen res with just a url? 
async function getCurrentTab() {
    let info = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(info); // Use destructuring to get the first tab
    // let url = tab.url; // Access the URL directly from the tab object
    console.log(url);
    console.log(tab);
    console.log('hello'); // is async being triggered
}
// getCurrentTab();

const getQuality = () => {
    // const vidHeight = 1920; // test
    // const vidWidth = 1080;
    // const screenHeight = window.screen.availHeight;
    // const screenWidth = window.screen.availWidth;

    // if (vidHeight !== screenHeight || vidWidth !== screenWidth) {
        createNotification();
    // }
}

const createNotification = () => {
    chrome.notifications.create(
        {
            title: 'Quality Checker',
            message: 'Check Video Quality!',
            iconUrl: "youtube-play-button-logo.png",
            type: 'basic',
            silent: false
        }
    );
}