$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $( ".gist-col" ).hover(
        function() {
            $(this).addClass('shadow-lg gist-col-highlight').css('cursor', 'pointer');
        }, function() {
            $(this).removeClass('shadow-lg gist-col-highlight');
        }
    );

// document ready
});
