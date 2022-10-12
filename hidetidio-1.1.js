function hideTdo() {
  var timer = null;
  var target = document.querySelector('#tidio-chat iframe');
  if(!target) {
    if(timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(hideTdo, 500);
    return;
  } else {
    var timer2 = null;
    var tdo = document.querySelector('#tidio-chat iframe')
                .contentDocument
                .querySelector('a[aria-label="Powered by Tidio."]');
    if(!tdo) {
      if(timer2 !== null) {
        clearTimeout(timer2);
      }
      timer2 = setTimeout(hideTdo, 1);
      return;
    }
    var iframe_content = document.querySelector('#tidio-chat iframe').contentDocument
    iframe_content.querySelector('a[aria-label="Powered by Tidio."]').remove();
    iframe_content.querySelector('button[class="widgetLabel moveFromRightLabel-enter-done"]')[0].remove();
    return true;
  }
}

hideTdo();

setInterval(hideTdo, 10);
