jQuery(function(e){WebFont.load({google:{families:["Open Sans:400,800","Roboto:300,400,700,700i"]}}),e("[data-scrollto]").on("click",function(t){var o=e(this).data("scrollto"),l=e(o);l.length&&(t.preventDefault(),l.is(":hidden")&&e('[data-target="'+o+'"]').trigger("click"),e(window).scrollTo(l,400))}),e(".toggler").on("click",function(){var t=e(this).data("target");if(t){var o=e(t);o.length&&(e(this).toggleClass("toggler--open"),o.slideToggle(200))}})});