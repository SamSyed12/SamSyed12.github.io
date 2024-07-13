
$(document).ready(function() {
    // Add 'img-enlargable' class and change cursor style for images with data-enlargable attribute
    $('img[data-enlargable]').addClass('img-enlargable').css('cursor', 'pointer').click(function() {
        var src = $(this).attr('src');

        // Create overlay <div> with black background and high opacity
        $('<div>').css({
            background: 'rgba(0, 0, 0, 0.9)',
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: '10000',
            top: '0',
            left: '0',
            cursor: 'default'
        }).click(function() {
            // Remove both the enlarged image and the overlay
            $('.enlarged-img, .overlay').remove();
        }).addClass('overlay') // Add a class to the overlay for easier targeting
        .appendTo('body'); // Append overlay to the body

        // Create enlarged <img> element
        $('<img>').attr('src', src).addClass('enlarged-img').css({
            maxWidth: '80%',
            maxHeight: '80%',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '10001',
            cursor: 'default'
        }).appendTo('body'); // Append enlarged image to the body
    });
});

