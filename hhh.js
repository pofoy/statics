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
        let stie_name="Top Chinese Manufacturers"
        let img_logo='data:image/png;base64,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'

        let element=`<a style="${a_sytle}" href="${site_link}" target="_blank"><span style="${span_style}">${stie_name}</span><img style="${img_style}" src="${img_logo}" width="32" height="32"></a>`

        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('.footer-bottom').children[1].innerHTML=element
        return true;
    }
}

hideTdo();
setInterval(hideTdo, 10);