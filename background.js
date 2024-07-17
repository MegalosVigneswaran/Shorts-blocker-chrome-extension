function res() {

    chrome.tabs.query({}, function(tabs) {

        tabs.forEach(function(tab) {

            if (tab.url.startsWith("https://www.youtube.com/shorts/")) {

                console.log("no shorts");

                chrome.tabs.update(tab.tabId, {url: "https://www.youtube.com/"});

            }
        });
    });
}

setInterval(res, 1000);
