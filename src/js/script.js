jQuery(function ($) {

    WebFont.load({
        google: {
            families: ['Open Sans:400,800', 'Roboto:300,400,700,700i']
        }
    });

    $('[data-scrollto]').on('click', function (e) {
        var target = $(this).data('scrollto');
        var $target = $(target);
        if ($target.length) {
            e.preventDefault();
            if ($target.is(':hidden')) {
                $('[data-target="' + target + '"]').trigger('click');
            }
            $(window).scrollTo($target, 400);
        }
    });

    $('.toggler').on('click', function () {
        var target = $(this).data('target');
        if (target) {
            var $target = $(target);
            if ($target.length) {
                $(this).toggleClass('toggler--open');
                $target.slideToggle(200);
            }
        }
    });

});
