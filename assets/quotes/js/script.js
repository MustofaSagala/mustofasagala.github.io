


(function($) {

    "use strict";

    var bodySelector = $("body"),
    htmlAndBody = $("html, body"),
    windowSelector = $(window);



    /* -------------------------------------
        Preloader 
    ------------------------------------- */
    var preloader = function() {
        var pageLoader = $('#preloader');
        if(pageLoader.length) {
            pageLoader.children().fadeOut(); /* will first fade out the loading animation */
            pageLoader.delay(150).fadeOut('slow'); /* will fade out the white DIV that covers the website.*/
            bodySelector.delay(150).removeClass('preloader-active');
        }
    };

   


    /* =======================================
       When document is ready, do
    ======================================= */
    $(document).on('ready', function() {
        preloader();
    });

})(jQuery);