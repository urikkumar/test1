function url_spy($) {
    // route has the current url path
    route = document.location.href;
    route = route.slice(route.lastIndexOf('/') + 1, route.length);
    if (route == "") {
        route = "#dashboard";
    }
    // Remove active class from previous active tab andd closes the open submenu
    //$('.nav-list').find('.active').removeClass('active');
    // Selects all the anchors under (immediate child)li elements(descendent of .nav-list class)
    $('.nav-list li > a').each(function() {
        // a has the current anchor
        var a = this.href;
        a = a.slice(a.lastIndexOf('/') + 1, a.length);
        if (a==route) {
            // Adds active class to the anchor's tab
            parentLi=$(this).parent('li');
            $('.nav-list').find('.active').removeClass('active');
            parentLi.addClass('active');
        }
    });
};
