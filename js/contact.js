var enableBtn = function () {
    document.getElementById("btnSubmit").disabled = false;
}

var mq = window.matchMedia('all and (max-width: 700px)');
if (mq.matches) {
    // the width of browser is more then 700px

     document.getElementById("divCaptcha").style.display = 'none';
    document.getElementById("btnSubmit").disabled = false;
} else {
    // the width of browser is less then 700px
    document.getElementById("divCaptcha").style.display = 'block';
    document.getElementById("btnSubmit").disabled = true;
}

mq.addListener(function (changed) {
    if (changed.matches) {
        // the width of browser is more then 700px

         document.getElementById("divCaptcha").style.display = 'none';
        document.getElementById("btnSubmit").disabled = false;
    } else {
        // the width of browser is less then 700px
           document.getElementById("divCaptcha").style.display = 'block';
        document.getElementById("btnSubmit").disabled = true;
    }
});
