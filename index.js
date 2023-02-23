

// refreshes the page when the size is changed
$(window).resize(function () {
    location.reload();;
});

var maxWidth = 788;
// if the screen is a certain width it applies this code (for mobile/tablet)
if (window.innerWidth <= maxWidth) {

    $(".icon-creator").click(function () {

        $(".creator").hide();
        $(".creator").removeClass("creator-type");
        $(".social").addClass("social-type");

    });

    $(".icon-social").click(function () {

        $(".social").removeClass("social-type");

        $(".creator").show();
        $(".creator").addClass("creator-type");

    });

} else if (window.innerWidth > maxWidth) { // same as the if above (for desktop) 

    $(".icon-creator").click(function () { // able and disable socials tab desktop

        var rect = $(".icon-creator")[0].getBoundingClientRect();
        $(".popup").css({ "top": rect.top - 70, "left": rect.left - 80 });

        $(".popup").toggleClass('popup-type');
        $(".icon-creator").toggleClass('icon-share-clicked');

    });


}