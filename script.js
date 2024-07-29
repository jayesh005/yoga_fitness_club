$(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
});

AOS.init({
    disabal : "mobile",
    duration: 800,
    anchorPlacement: "center-bottom",
});


