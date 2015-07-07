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

var showAlert = function () {
    $("#alertSuccess").addClass("in");
    setTimeout(function(){$("#alertSuccess").removeClass("in")},5000);
}


var slideAlert = function () {
    $("#alertSuccess").addClass("in");
    $("#alertSuccess").fadeTo(2000, 500).slideUp(500, function(){
               $("#alertSuccess").removeClass('in');
                });

}
$("#tstbtn").on("click", slideAlert);
