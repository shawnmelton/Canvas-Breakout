/**
 * Paddle class will draw the game paddle into the browser DOM.
 *
 * The paddle will need to be drawn with respect to the size of the browser.
 *
 */

define(['libs/tools/dimensions', 'libs/tools/draw'], function(Dimensions, Draw) {
    var Paddle = function() {};
    Paddle.prototype = {
        el: null,

        build: function() {
            this.el = Draw.rectangle(
                (Dimensions.get().canvas.width - Dimensions.get().paddle.width) / 2,
                (Dimensions.get().canvas.height * 0.98) - Dimensions.get().paddle.height,
                Dimensions.get().paddle.width,
                Dimensions.get().paddle.height,
                ['#cc6600', '#882200']
            );
        },

        get: function() {
            if(this.el === null) {
                this.build();
            }

            return this.el;
        },

        render: function() {
            this.get();
        }
    };

    return new Paddle();
});