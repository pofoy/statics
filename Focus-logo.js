function hideTdo() {
    var timer = null;
    var target = document.querySelector('#tidio-chat iframe');
    if (!target) {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(hideTdo, 500);
        return;
    } else {
        var timer2 = null;
        var tdo = document.querySelector('#tidio-chat iframe').contentDocument.querySelector('a[href*="tidio.com/powered"]');
        if (!tdo) {
            if (timer2 !== null) {
                clearTimeout(timer2);
            }
            timer2 = setTimeout(hideTdo, 1);
            return;
        }
        // document.querySelector('#tidio-chat iframe').contentDocument.querySelector('a[href*="tidio.com/powered"]').remove();

        var element='<span>Top Chinese Manufacturers</span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAGCAYAAAGurG6FAAAAvUlEQVR4nGNgIAhycvP/p6Sm/wfRIIyhYOLEaRYQlTkFHZ+3yYBV1NU1xIPozKyc/3BjQBimgGTw/USY47JlK+pRrER3KLrpa9du1iHahubm1pZFixblwdxcVVV7DsPXOTl5bciasPkHWaympnZeUUnpAxA7OycPblh8YjL2cACFIiELKAJZuQVhKBZslV4AoguKii+BHZCbfxpEFxYVXyksKr04ceLk8rz8gksweRCYOHFKLExPQWHxRRANAE6jaMcgA0eTAAAAAElFTkSuQmCC" alt="" width="50" height="24">'
        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('a[href*="tidio.com/powered"]').innerHTML=element
        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('a[href*="tidio.com/powered"]').setAttribute('href', 'https://www.baidu.com')
        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('a[href*="tidio.com/powered"]').removeAttribute('aria-label')
        return true;
    }
}

hideT