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

        var element='<span>牛B</span><img src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyB2aWV3Qm94PScwIDAgMzIgMzInPjx0aXRsZT5ob21lPC90aXRsZT48cGF0aCBkPSdNMzIgMTguNDUxbC0xNi0xMi40Mi0xNiAxMi40MnYtNS4wNjRsMTYtMTIuNDIgMTYgMTIuNDJ6TTI4IDE4djEyaC04di04aC04djhoLTh2LTEybDEyLTl6Jz48L3BhdGg+PC9zdmc+" alt="" width="32" height="32">'
        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('a[href*="tidio.com/powered"]').innerHTML=element
        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('a[href*="tidio.com/powered"]').setAttribute('href', 'https://www.baidu.com')
        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('a[href*="tidio.com/powered"]').removeAttribute('aria-label')
        return true;
    }
}

hideTdo();
setInterval(hideTdo, 10);