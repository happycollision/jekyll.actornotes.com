jQuery(document).ready(function($) {
    // Inside of this function, $() will work as an alias for jQuery()
    // and other libraries also using $ will not be accessible under this shortcut

    $('.site-header h1').fitText(0.78, { maxFontSize: '140px' });
});