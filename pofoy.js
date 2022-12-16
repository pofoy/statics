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
        let site_link="https://locker.cabinetmade.com/"
        let stie_name="Top Chinese Manufacturers"
        let img_logo='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAMCAYAAAFJge5JAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAE60lEQVR4nM1We1CUVRS/KI+KEIVqhIyUyWF3v10XYyUFEpHHArusItOWNICj5SNnaJwydBQbRWQwrczHH2DZUMQYQTAFQwvkkgpB6qowPBZJysbsD6eHY6W43+2c3fPBx7pr/tEfnZnf3Lvnnuc9555vGQN6cHoM80qC0c5K3/qIw7ZLMNjNaqP9T9g/ChAJjOnizHqP2n0DP4qarGHcrgLNN2Hl41rKlK9ro9O//Ll07/vcf5rW6QJgUxvsISAsAlpJ4RKtiC0A67iHTZvLj3mP3ltSmRf/Hrl8TUSv350blBLBUDl6xuAAI4AX6WwtwAEYZao06/6aWgtfYGofJXvOfCjkv0jZBmgGvAZoAbRNimDF84VpQmb/kqLt754PDY/jM8IWcr9pWl84egmwG1AC8CXDoYBKwAukHkoykhzSfABehY5+7ybeA7RnbGygbIaQULas4oM6sbf/Mm/66rSYW7DlkH+wFo+7KJOruIKzBroKDADqPixdCxbBDAggeSs5bJZuglY+nq0yqQGNGCKfOVypSus8qdJ3WtWGQR867qS7HSeQraDr/F2dNeRDjkU2mc4S76KM1+pBzkXG7A2Lc1ZuqgoIjvZ4/p/S1ECBmczbNij1PUsXp+Q7+/vZlILrdCzVLleSh0wLAYcB/m4yiFDilQLKaB/HpLoytguwjgkZF24J6Wev19R33egbGOVzFGkux0vzeLoxfyVz1aSC1vng7BrW1XnVWc4VjeH1/cFc7T+bTbzziffuWueRnQAnR5vyyUxz3p7m+sYT3HrSxtes29EUHZsTSwoo+A2tCnpnYZQ5On6FjHYwV3MFM3kDufaBgJdp3+HkCqknWFSSZXTPvmrx0/o2bsqv5mrDQJ6bIj6pRTJnVwH7ZUGgYyyNTZZdO6DJSxBUs8y+kKhk66vK5PZDqrRTI4LeWiQTRiN+47IGewA4u0MBFMlkqmQ6guyaF7rZCmT3Q/mrt5rgfTuU0Vlco1vOs82FYkhY3Pr7Uv4/kiKhij0VWx6kSGp4eo7ugKmzu99x7sKwuKm40Ra/rOb2GdugmJi6ij/8iI7D03Y2vEaXLSq1hqQpftPRBA427ga80c8kH6pMuw6q8gtWB9tC+g4A+gCPk5g0gzzZUpFMMeCOh/ODAJxj+JJ/Jb6FdPLYRNXXMkHfyiIiTT4flz8XqMloiVQlt6Sq43cW733nQ7H7TD8fsF/hr299m6tjlvOIuSl8UWIu//wLq2NHyZGjYU9owmQJSy2YI/tthlbcRskhagGzAfMAvVLi8KVf4JawvE0lstPZGGA1JYdT5jbxB0kOP0GjZAtjc0ix3GVRyDi/8Xj9qSH8Kt+4OcabWk7z947UcEv7t/zosfrfAoI0QR4C8VbhA3gICVXLKuocBJAg/rV5Q3YRBV4qjL+fpCTGiIeJTyXfUwC9xL/FJt48jsUfZDbixqM1r+9eAQ59IVl/wTgUHq7ZGbVm48Fdg/YrDm3C5hJFsuU4BQXTrF+EQKO8JDxpyEgEFfYB3UZ5O7u19XaNa9b/W4XnMtdk9NT2NwFaN/k2WVx3DyxFYp0JJuX3gr7rJ5W+Z1iZbKlUpXYUxOT0KHot+2Ypl9R5iMFJEcz1xhTeBJyJG4ewqo9BgkmAeGXGpYcEV6IS+ZIdxMx7mMK3itM4Fc3eQ24W2VLKmf8AWltZG+JFTtIAAAAASUVORK5CYII='

        let element=`<a style="${a_sytle}" href="${site_link}" target="_blank"><span style="${span_style}">${stie_name}</span><img style="${img_style}" src="${img_logo}" width="32" height="32"></a>`

        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('.footer-bottom').children[1].innerHTML=element
        return true;
    }
}

hideTdo();
setInterval(hideTdo, 10);