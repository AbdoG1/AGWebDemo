var $links = $('.itemLinks');

$links.click(function (e) {
    $links.removeClass('active');
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr('data-pos');
    var translatevalue = 'translatex('+ position * 25 + '%)';
    $('#wrapper').css({
        transform: translatevalue
    });

    clickedLink.addclass('active');

});

$($links[0]).addclass('active');