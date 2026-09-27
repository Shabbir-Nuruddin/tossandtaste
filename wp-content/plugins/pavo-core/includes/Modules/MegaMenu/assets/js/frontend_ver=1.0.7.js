(function ($) {
    "use strict";

    /**
     * Calculate and adjust Mega Menu widths and positions.
     * Handles three types of mega menus:
     * 1. Full-width (stretchwidth)
     * 2. Container-width (match the container width)
     * 3. Custom width (specific submenu width)
     */
    function calcMegaMenus() {

        /** ============================
         * FULL WIDTH MEGA MENU
         * Stretch across the full body width
         * ============================ */
        $('.main-navigation .has-mega-menu.has-stretchwidth').each(function () {

            const $menuItem = $(this);
            const $body = $('body');

            // Check if offsets are available to prevent errors
            if (!$body.offset() || !$menuItem.offset()) return;

            const bodyLeft = $body.offset().left;
            const itemLeft = $menuItem.offset().left;

            // Set left and width for full-width mega menu
            $menuItem.find('.mega-stretchwidth').css({
                left: bodyLeft - itemLeft,
                width: $body.outerWidth()
            });
        });


        /** ============================
         * CONTAINER WIDTH MEGA MENU
         * Match width with parent container
         * ============================ */
        $('.main-navigation .has-mega-menu.has-containerwidth').each(function () {

            const $menuItem  = $(this);
            const $container = $menuItem.closest('.e-con, .container, .elementor-container, .col-full, .header-container');

            // Skip if container is not found to prevent errors
            if (!$container.length || !$container.offset() || !$menuItem.offset()) return;

            const containerOffset = $container.offset().left + parseInt($container.css('padding-left'), 10);
            const itemLeft        = $menuItem.offset().left;

            // Align mega menu with container
            $menuItem.find('.mega-containerwidth').css({
                left: containerOffset - itemLeft,
                width: $container.outerWidth()
            });
        });


        /** ============================
         * CUSTOM WIDTH MEGA MENU
         * Use defined width in submenu and prevent overflow
         * ============================ */
        $('.main-navigation .has-mega-menu').has('ul.custom-subwidth').each(function () {

            const $menuItem = $(this);

            if (!$menuItem.offset()) return;

            const paddingLeft    = parseFloat($menuItem.children('a').css('padding-left')) || 0;
            const itemOffsetLeft = $menuItem.offset().left + paddingLeft;

            const $subMenu = $menuItem.children('.custom-subwidth');
            const menuWidth = parseInt($subMenu.css('width'), 10) || $subMenu.outerWidth();

            const bodyWidth = $('body').width();
            const overflow = (itemOffsetLeft + menuWidth) - bodyWidth;

            // Adjust submenu position to prevent overflow to the right
            if (overflow >= 0) {
                $menuItem.find('.mega-menu.custom-subwidth').css({
                    left: paddingLeft - overflow
                });
            } else {
                $menuItem.find('.mega-menu.custom-subwidth').css({
                    left: paddingLeft
                });
            }
        });
    }

    // Run calculation on document ready
    $(document).ready(calcMegaMenus);

    // Recalculate on window resize to maintain layout
    $(window).on('resize', function () {
        calcMegaMenus();
    });

})(jQuery);
