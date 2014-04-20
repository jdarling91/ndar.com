// Sexy opening animations.
$( function() {
    $("#primary").hide();
    $("#header").animo( { animation: 'bounceInLeft', duration: 1 }, function() {
        $("#primary").show().animo( { animation: 'bounceInRight', duration: 1 });
    });
});

// Makes the "contact me" link open the "contact me" tab.s
$( function() {
    $("#contactMeLink").click( function() {
        $("#contactMeTab").click();
    });
});

// Scrolling for projects dropdowns.
$( function () {
    $(".project_link").click( function() {
        $("html, body").animate({
            scrollTop: $(this).parent().parent().offset().top
        }, 1500);
    });
});