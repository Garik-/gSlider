/**
 * gSlider v0.0.2 - Fully loaded, responsive content slider
 * https://github.com/Garik-/gslider/
 *
 * Copyright 2014, Gar|k - http://c0dedgarik.blogspot.ru/
 * Written for project diafan.ru
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
;
(function($) {

    var defaults = {
        duration: 500,
        fade: 750,
        next: '.bx-next',
        prev: '.bx-prev',
        item: '.gslider__item'
    };

    $.fn.gSlider = function(options) {

        if (this.length === 0)
            return this;

        if (this.length > 1) {
            this.each(function() {
                $(this).gSlider(options);
            });
            return this;
        }

        var slider = {};
        var el = this;

        var init = function() {
            // merge user-supplied options with the defaults
            slider.settings = $.extend({}, defaults, options);

            slider.nowSlideNumber = 1;
            slider.sliderCount = $(slider.settings.item, el).length;

            el.bxSlider({
                mode: 'fade',
                pager: false,
                speed: this.duration,
                adaptiveHeight: true
            });

            $(slider.settings.next).click(function(e) {
                e.preventDefault();
                next();
            });

            $(slider.settings.prev).click(function(e) {
                e.preventDefault();
                prev();
            });

            var next = function() {
                if (slider.nowSlideNumber === slider.sliderCount) {
                    slider.nowSlideNumber = 1;
                } else {
                    slider.nowSlideNumber += 1;
                }


                setBackground(slider.nowSlideNumber);
            };

            var prev = function() {
                if (slider.nowSlideNumber === 1) {
                    slider.nowSlideNumber = slider.sliderCount;
                } else {
                    slider.nowSlideNumber -= 1;
                }

                setBackground(slider.nowSlideNumber);
            };

            setBackground(slider.nowSlideNumber);
        };

        var setBackground = function(index, duration, fade) {

            var item;
            switch (typeof index) {
                case "number":
                    item = $(slider.settings.item + ':eq(' + (index - 1) + ')', el);
                    break;
                case "object":
                    item = $(index, el);
                default:
                    return false;
            }

            var imgSrc = item.data('src'),
                    options = {
                        duration: typeof duration !== "undefined" ? duration : slider.settings.duration,
                        fade: typeof fade !== "undefined" ? fade : slider.settings.fade
                    };


            if (imgSrc)
                item.backstretch(imgSrc, options);

        };

        $(window).resize(function() {
            $(slider.settings.item, el).each(function() {
                setBackground(this, 0, 0);
            });
        });

        init();

        return this;
    };

})(jQuery);
