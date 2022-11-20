$(document).ready(function () {
    $('#navbar-toggle').click(function () {
        $('#respon-menu').stop().slideToggle()
        $('#navbar-toggle').toggleClass('open')
    })

    function hide_respon_menu() {
        $('#respon-menu').slideUp()
        $('#navbar-toggle').removeClass('open')
    }

    $(window).resize(function () {
        hide_respon_menu()
    })

    $(window).scroll(function () {
        hide_respon_menu()
    })
})