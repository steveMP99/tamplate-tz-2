$('#container').pageScroller({

    // animation speed in ms
    travelTime:1000,

    // delay in seconds
    afterTravelTimeout:1,

    // additional easing function
    travelEasing:'swing',

    anchors:['.anchor1','#anchor2','.anchor3'],
    startingPage: 1,

    onTrigger: function(none, targets) {
        // do something
    },

    onEnd : function(none, targets) {
        // do something
    }


});

var grabbingStarted = 0;
var grabbingEnded = 0;
var imgpath = $(".img-bg");
$.each(imgpath, function (key, value){
    var path = value.src;
    var parentImg = $(value).closest(".img-parent");
    var preview = parentImg.children(".img-element");

    preview.css({
        'background': 'url(' + path + ') center center no-repeat',
        'background-size': 'contain',
        'display': 'block'
    });
    parentImg.css({
        'background-image': 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(' + path + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'display': 'block'
    });
});

var imgpathsimilar = $(".bg-img-details");
$.each(imgpathsimilar, function (key, value){
    var path = value.src;
    var preview = $(value).parent(".preview");

    preview.css({
        'background': 'url(' + path + ') center center no-repeat, rgba(0,0,0, 1)',
        'background-size': 'contain',
        'display': 'block'
    });
});


$("body").on("click", ".whatsapp", function(){
    $("#exampleModal").css({
        "display":"block",
        "-webkit-animation-duration": "1s",
        "animation-duration":"1s",
        "animation-fill-mode":"both",
    });
});

$("body").on("click", ".account", function(){
    $("#account").css({
        "display":"block",
        "-webkit-animation-duration": "1s",
        "animation-duration":"1s",
        "animation-fill-mode":"both",
        "animation-fill-mode":"both",
    });
});

$("body").on("click", ".ville", function(){
    $("#ville").css({
        "display":"block",
        "-webkit-animation-duration": "1s",
        "animation-duration":"1s",
        "animation-fill-mode":"both",
        "animation-fill-mode":"both",
    });
});

$("body").on("click", ".categorie", function(){
    $("#categorie").css({
        "display":"block",
        "-webkit-animation-duration": "1s",
        "animation-duration":"1s",
        "animation-fill-mode":"both",
        "animation-fill-mode":"both",
    });
});


$("body").on("click", ".denoncer", function(){
    $("#denoncer").css({
        "display":"block",
        "-webkit-animation-duration": "1s",
        "animation-duration":"1s",
        "animation-fill-mode":"both",
        "animation-fill-mode":"both",
    });
});

$("body").on("click", ".close", function(){
    $("#exampleModal").css({
        "display":"none"
    });
    $("#account").css({
        "display":"none"
    });
    $("#categorie").css({
        "display":"none"
    });
    $("#ville").css({
        "display":"none"
    });
    $("#denoncer").css({
        "display":"none"
    });
});


// window.addEventListener('scroll', function() {
//     var element = document.querySelector('.demo-1');
//     var headerBG = document.querySelector('.header');
//     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
//
//     if (scrollPercentage > 0.5) { // Adjust threshold as needed
//         headerBG.style.backgroundColor = '#ffffff'; // Change to desired color
//     } else {
//         headerBG.style.backgroundColor = 'transparent'; // Change to desired color
//     }
// });

window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        $('#header').css({
            "background":"#ffffff"
        });
    } else {
        $('#header').css({
            "background":"transparent"
        });
    }
});