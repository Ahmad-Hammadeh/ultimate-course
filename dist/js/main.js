$(function() {

    // Trigger Sidebar Toggle Button
    $('.sidebar-toggle').on('click', function() {
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });

});