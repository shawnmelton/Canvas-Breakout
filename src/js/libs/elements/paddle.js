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
        x: null,

        build: function() {
            this.el = Draw.rectangle(
                this.x,
                (Dimensions.get().canvas.height * 0.98) - Dimensions.get().paddle.height,
                Dimensions.get().paddle.width, 
                Dimensions.get().paddle.height,
                ['#7a5230', '#302013']
            );
        },

        clear: function() {
            this.el.clearRect(
                this.x,
                (Dimensions.get().canvas.height * 0.98) - Dimensions.get().paddle.height,
                Dimensions.get().paddle.width,
                Dimensions.get().paddle.height
            );
        },

        get: function() {
            if(this.el === null) {
                this.x = (Dimensions.get().canvas.width - Dimensions.get().paddle.width) / 2;
                this.build();
            }

            return this.el;
        },

        move: function(direction) {
            this.clear();

            if(direction === 'left') {
                this.x -= (Dimensions.get().canvas.width * 0.02);

                if(this.x < 0) {
                    this.x = 0;
                }
            } else if(direction === 'right') {
                this.x += (Dimensions.get().canvas.width * 0.02);

                if((this.x + Dimensions.get().paddle.width) > Dimensions.get().canvas.width) {
                    this.x = Dimensions.get().canvas.width - Dimensions.get().paddle.width;
                }
            }

            this.build();
        },

        render: function() {
            this.get();
        }
    };

    return new Paddle();
});