$(function() {

    // Trigger Sidebar Toggle Button
    $('.sidebar-toggle').on('click', function() {
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });

    // Toggle Apperance Of Child List
    $('.links-list .toggle-list').on('click', function(){
        $(this).next('ul').slideToggle().end().find('.fa-angle-right').toggleClass('opened');
    });

});