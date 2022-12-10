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
        
        let a_sytle="margin-right: 40px;float: right;display: flex;text-decoration: none;color: rgb(136, 148, 171);font-weight: 400;font-size: 10px;direction: ltr;"
        let span_style="margin-right: 8px"
        let img_style="width: 50px; height:24px"
        let site_link="https://www.baidu.com"
        let stie_name="牛B"
        let img_logo='data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyB2aWV3Qm94PScwIDAgMzIgMzInPjx0aXRsZT5ob21lPC90aXRsZT48cGF0aCBkPSdNMzIgMTguNDUxbC0xNi0xMi40Mi0xNiAxMi40MnYtNS4wNjRsMTYtMTIuNDIgMTYgMTIuNDJ6TTI4IDE4djEyaC04di04aC04djhoLTh2LTEybDEyLTl6Jz48L3BhdGg+PC9zdmc+'

        let element=`<a style="${a_sytle}" href="${site_link}" target="_blank"><span style="${span_style}">${stie_name}</span><img style="${img_style}" src="${img_logo}" width="32" height="32"></a>`

        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('.footer-bottom').children[1].innerHTML=element
        return true;
    }
}

hideTdo();
setInterval(hideTdo, 10);