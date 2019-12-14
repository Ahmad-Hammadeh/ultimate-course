$(function () {

    // Toggle Apperance Of Child List
    $('.links-list .toggle-list').on('click', function () {

        $(this).next('ul').slideToggle().end().find('.fa-angle-right').toggleClass('opened');

    });

    // Trigger Sidebar Toggle Button
    $('.header .sidebar-toggle').on('click', function () {

        $('.content-area, .sidebar').toggleClass('no-sidebar');

    });

    /* Start Screen Mode Change Functions */

    // Toggle Screen Mode If Change Screen Mode Icon Is Clicked
    $('.header .fullscreen-toggle').on('click', function () {

        /* Get the documentElement (<html>) to display the page in fullscreen */
        var elem = document.documentElement;

        // Toggle Full Screen Mode Depending On Previous Screen Mode
        if (!document.fullscreenElement) openFullscreen();

        else closeFullscreen();


        /* View in fullscreen */
        function openFullscreen() {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        }

        /* Close fullscreen */
        function closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        }

    });

    // Toggle Change Screen Mode Icon If Screen Mode Has Been Changed
    // Note: Because Of Keyboard Using Is Allow To Change Screen Mode, Independent Event Is Used To Watch Screen Mode Change
    $(document).on('fullscreenchange', function () {
        // Toggle Change Screen Mode Icon Depending On New Screen Mode
        if (!document.fullscreenElement) $('.header .fullscreen-toggle').removeClass('fa-compress').addClass('fa-expand');

        else $('.header .fullscreen-toggle').removeClass('fa-expand').addClass('fa-compress');
    });

    /* End Screen Mode Change Functions */

    // Toggle User Profile Arrow
    $('.usermenu-container .usermenu-toggle').on('click', function () {
        
        $(this).find('.usermenu-arrow').toggleClass('opened');

    });

});