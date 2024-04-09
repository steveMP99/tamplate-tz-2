
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
});