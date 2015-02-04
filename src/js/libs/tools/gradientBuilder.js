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
            var gradient = context.createRadialGradient(x + radius, y + radius, 0, x + (radius * 1.2), y + (radius * 1.2), radius);
            return this.addStops(gradient, colorArr);
        }
    };

    return new GradientBuilder();
});