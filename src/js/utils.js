var isScrolledIntoView = function (elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


window.onbeforeunload = function () {
    if ($('#home').length > 0) {
        window.scrollTo(0, 0);
    }
};

var goToByScroll = function (id, time) {
    id = id.replace("link", "");
    $('html,body').animate({ scrollTop: $("#" + id).offset().top }, time);
};


var getCookie = function (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

var isActiveScrollSection = function (id, callback) {
    if (isScrolledIntoView('#' + id + ' .text-block > p')) {
        if (!$('#about > section.' + id).hasClass('move')) {
            $('#about > section.' + id).addClass('move');
            if (callback) {
                callback();
            }
        }
    }
};