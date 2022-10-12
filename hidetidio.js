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
    document.querySelector('#tidio-chat iframe')
      .contentDocument
      .querySelector('a[aria-label="Powered by Tidio."]')
      .remove();
    return true;
  }
}

hideTdo();

setInterval(hideTdo, 10);


// aria-label="Powered by Tidio."