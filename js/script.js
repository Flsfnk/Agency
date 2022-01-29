$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .background__block').toggleClass('active');
        $('body').toggleClass('lock');
    });
});