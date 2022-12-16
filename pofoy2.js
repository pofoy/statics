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
        let img_logo='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAaCAYAAAFk7vQ4AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAEkklEQVR4nO2XfVBUVRTAr8u6ErKkZGU5MjWRy763KxCjAykKLLvLfmUzi9qo6R+mQFFm2Yw5fhAyDRjlEOk4jgMqAi5SQInEakEBCoUOIfE5Exh90R86pg324bud+/a+3csCU2nlTPPOzG/evefdd84999177r0IgTy/+fV0NJE8ldG6hLdevAxFrLP3C/CUuF1RquerJnwRxq2fLZWpT0R9Om7Dn2ZJWVR4TJ55y6tv4fKKemIOE7PEBROaBvlCzEX/TKi3KtZl6T/9rQ9ibZWLa2o/xbPmLMJK1cwFoAqB2LYCqUAa1HcCJmAFsB3oET/krd2KzJffLtTZen5HnkFAenufUu8YIP99ClQ3Uh9k0KaiOzsw/71o4vahinfdX+ss54+lrtqMp90dheMSVl+AV+HIN2PWkrYwYIfprNpPP7+Jxi6cHFo+SuukHAgMAkWihk9pD+odGP61q2cIuz9qw6GzYx+Q+oI8f4FQDU7eB36kjq8AJYyzeuA1xvEloI5xus0boTb59NO89XwWZ2peO/pl3v1/NiK8beAvjJssd0Igt6JtOwu+iV7oLPzXnDhX74p/bmvtmR05ZUPaKIe4JKaqI8krabqPkArMyFBgFLgOqEE1A/lmaDny5BOyx9wAZgFkBn9P4hDbcKamhPC4PfHbsw9e/OrSCI6ItGPNfBs+dLi6mhrZBJDEtY6uuyNAOc3qocizVMiyuY+2bwAKkW9ZkOdnwDti7XGHK6ure1DIzS/Cpa66USZo77YBTCHZkbf1TwdHIaTMOJMMk7IWUNEyop31lCOdw4izdKoPHKpyP7qo5FkwRNJtGONsk+QZ9DXECU3JRxlnkuxGvsRwkuqM3jZcYi3SOTpytIb6LVxKe9Ikv9Ur4EREFllkuXVRBesD7pr5mFh2rnzRsOfNYiHk3gU4bF4yNtk3Cg9pjLuZ5ko/xonO0Q+bb18gbMBhsD5V+vFr1N8GQTFBm7lAkJ8+YIL2CqoLQJyxMZ1PaTvBmdvaY55o+W7vgQbh6rVfhCPlTTdKXR9ig/UZHDgjGqtCIsUNYWnyupuF+8tqFEp1NPKlz5+B67T+G/AIHDaDIJgvSM6WshzNdCSft2isvWSTCEVjU7CEi3bUxbzHTLsuYDrwMPJsMkS3HljO9GGeN9yrHbkPRiRUWmLMx/JeeKVgBDYa3Ns/jFs/78bHK93ChoxdnWmZ2SesyzKS6I6nYRyfA6qYziVCAPU0mEG95zRNMqsC+JbqK/yCyweWAjztUi4TzD3Mn+mk+gZaJ7vrD4zvy972y9PaEGdwB3Oms7Wp6R9fa27tFvILXMLB4veEopKTgmNNMY598vQV3tbzEj92SrHBkdOpk3ZOCiRNukMB7UA20MHoVvoFR4x/QoMispDpMDmgktNxI6PLZPpiZOyMvw5q4kvn6ux9WXCP+YAzNjVGJJ56gzOf22dedSZPm1SXqTVU6fWWC+wnc4AW4CyQOs4gCdAm/qkNQDMwBDTCrr9G5+iTmgQzNia7o1qQ5+RNjvhkhpDLmP+ajKE2CHGT2JFFFllkkUWW/5X8AV7Z+bAKfBLwAAAAAElFTkSuQmCC'

        let element=`<a style="${a_sytle}" href="${site_link}" target="_blank"><span style="${span_style}">${stie_name}</span><img style="${img_style}" src="${img_logo}" width="32" height="32"></a>`

        document.querySelector('#tidio-chat iframe').contentDocument.querySelector('.footer-bottom').children[1].innerHTML=element
        return true;
    }
}

hideTdo();
setInterval(hideTdo, 10);