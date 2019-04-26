$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 500) {
            $('#navbar-color-rev').css("background-color", "white");
        } else {
            $('#navbar-color-rev').css("background-color", "transparent");
        }
    });
    $("#toogle-btn").click(function(){
        $("#myNavbar").css("background-color", "white");
    });
});
