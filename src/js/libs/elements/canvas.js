/**
 * Canvas class will draw the game canvas into the browser DOM.
 *
 * The canvas will need to be drawn with respect to the size of the browser.
 *
 */

define(['libs/tools/dimensions'], function(Dimensions) {
    var Canvas = function() {};
    Canvas.prototype = {
        el: null,

        build: function() {
            this.el = document.createElement('canvas');
            this.el.height = Dimensions.get().canvas.height;
            this.el.width = Dimensions.get().canvas.width;
            document.body.appendChild(this.el);

            this.el.style.height = Dimensions.get().canvas.height +'px';
            this.el.style.width = Dimensions.get().canvas.width +'px';
            this.el.style.marginTop = ((Dimensions.get().browser.height - Dimensions.get().canvas.height) / 2) +'px';
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

    return new Canvas();
});