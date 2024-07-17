function removeShorts() {
    try {
        // Home page shorts remove
        const elements = document.querySelectorAll('.style-scope.ytd-rich-shelf-renderer');
        elements.forEach(element => {
            element.remove();
        });

        // Remove shorts grid in search
        const elements1 = document.querySelectorAll('ytd-reel-shelf-renderer');
        elements1.forEach(element1 => {
            element1.remove();
        });

        // Remove shorts in search
        const elements2 = document.querySelectorAll('ytd-video-renderer');
        elements2.forEach(element2 => {
            const anchorTag = element2.querySelector('a.yt-simple-endpoint');
            if (anchorTag && anchorTag.getAttribute('href').includes('/shorts/')) {
                element2.remove();
            }
        });

        // Remove shorts from channel
        const ytTabShape = document.querySelector('yt-tab-shape[tab-title="Shorts"]');
        if (ytTabShape) {
            ytTabShape.remove();
        }

        // Remove shorts option in menu bar
        const parentElement = document.querySelector('a[title="Shorts"]').parentNode;
        if (parentElement) {
            parentElement.remove();
        }
    } catch (error) {
        // Suppress the error silently
    }
}

setInterval(removeShorts, 100);
