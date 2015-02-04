/**
 * Ball class will draw the game ball into the browser DOM.
 *
 * The paddle will need to be drawn with respect to the size of the browser.
 *
 */

define(['libs/tools/dimensions', 'libs/tools/draw'], function(Dimensions, Draw) {
    var Ball = function() {};
    Ball.prototype = {
        el: null,

        build: function() {
            this.el = Draw.circle(
                (Dimensions.get().canvas.width / 2),
                (Dimensions.get().canvas.height * 0.98) - Dimensions.get().ball.size,
                Dimensions.get().ball.size / 2,
                ['#aaaaaa', '#777777']
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

    return new Ball();
});