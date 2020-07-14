$(document).ready(function() {
    // set the default content from data-defaultsource
    // if your page is script-heavy, you may want to make this execute early
    // in the $(document).ready() handler to avoid ugly delays.
    $('div.tabcontrol.body').each(function() {
        $(this).html($('#' + $(this).data('defaultsource')).html());
    });

    // handle click on tabs
    $('li.tabcontrol.tab').click(function() {
        $('#' + $(this).data('target')).html( $('#' + $(this).data('source')).html());
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});