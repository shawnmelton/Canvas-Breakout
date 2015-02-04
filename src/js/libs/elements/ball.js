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
        x: null,
        y: null,
        moving: false,

        build: function() {
            this.el = Draw.circle(this.x, this.y, Dimensions.get().ball.size / 2, ['#aaaaaa', '#777777']);
        },

        clear: function() {
            this.el = Draw.circle(this.x, this.y, Dimensions.get().ball.size / 2, '#111111');
        },

        get: function() {
            if(this.el === null) {
                this.x = (Dimensions.get().canvas.width / 2);
                this.y = (Dimensions.get().canvas.height * 0.98) - Dimensions.get().ball.size;
                this.build();
            }

            return this.el;
        },

        move: function() {
            if(!this.moving) {
                this.clear();
                this.x += (Dimensions.get().canvas.width * 0.02);
                this.y += (Dimensions.get().canvas.width * 0.03);
                this.buld();
            }
        },

        redirect: function() {

        },

        render: function() {
            this.get();
        }
    };

    return new Ball();
});