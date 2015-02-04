/**
 * Gradient Builder class will obfuscate the Canvas context gradient generation.
 *
 */
define([], function() {
    var GradientBuilder = function() {};
    GradientBuilder.prototype = {
        addStops: function(gradient, colorArr) {
            var colorLength = colorArr.length - 1;
            if(colorLength < 1) {
                return;
            }

            for(var i in colorArr) {
                gradient.addColorStop((i / colorLength), colorArr[i]);
            }

            return gradient;
        },

        linear: function(x, y, h, context, colorArr) {
            var gradient = context.createLinearGradient(x, y, x, (y + h));
            return this.addStops(gradient, colorArr);
        },

        radial: function(x, y, radius, context, colorArr) {
            var gradient = context.createRadialGradient(x + (radius * 0.5), y + (radius * 0.5), 0, x, y, radius);
            return this.addStops(gradient, colorArr);
        }
    };

    return new GradientBuilder();
});