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
        let img_logo='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAGCAYAAAGurG6FAAAAvUlEQVR4nGNgIAhycvP/p6Sm/wfRIIyhYOLEaRYQlTkFHZ+3yYBV1NU1xIPozKyc/3BjQBimgGTw/USY47JlK+pRrER3KLrpa9du1iHahubm1pZFixblwdxcVVV7DsPXOTl5bciasPkHWaympnZeUUnpAxA7OycPblh8YjL2cACFIiELKAJZuQVhKBZslV4AoguKii+BHZCbfxpEFxYVXyksKr04ceLk8rz8gksweRCYOHFKLExPQWHxRRANAE6jaMcgA0eTAAAAAElFTkSuQmCC'

        let element=`<a style="${a_sytle}" href="${site_link}" target="_blank"><span style="${span_style}">${stie_name}</span><img style="${img_style}" src="${img_logo}" width="32" height="32"></a>`

        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('.footer-bottom').children[1].innerHTML=element
        return true;
    }
}

hideTdo();
setInterval(hideTdo, 10);
