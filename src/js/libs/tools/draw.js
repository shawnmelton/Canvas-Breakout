/**
 * Draw class will obfuscate the Canvas context drawing for 2d elements.
 *
 */
define(['libs/elements/canvas', 'libs/tools/gradientBuilder'], function(Canvas, GradientBuilder) {
    var Draw = function() {};
    Draw.prototype = {
        // Draw a circle on the canvas
        circle: function(x, y, radius, fillStyle) {
            var circle = this.start2d();
            circle.arc(x, y, radius, 0, Math.PI * 2, false);

            if(typeof fillStyle === 'object' && 'length' in fillStyle) {
                fillStyle = GradientBuilder.radial(x, y, radius, circle, fillStyle);
            }

            circle.fillStyle = fillStyle;
            circle.fill();
            return circle;
        },

        // Draw a line on the canvas
        line: function(x1, y1, x2, y2, hexColor) {
            var line = this.start2d();
            line.moveTo(x1, y1);
            line.lineTo(x2, y2);
            line.strokeStyle = hexColor;
            line.stroke();
            return line;
        },

        // Draw a rectangle on the canvas
        rectangle: function(x, y, w, h, fillStyle, strokeStyle) {
            var rectangle = this.start2d();
            rectangle.rect(x, y, w, h);

            if(typeof fillStyle === 'object' && 'length' in fillStyle) {
                fillStyle = GradientBuilder.linear(x, y, h, rectangle, fillStyle);
            }

            rectangle.fillStyle = fillStyle;
            rectangle.fill();

            if(typeof strokeStyle === 'string' && strokeStyle !== '') {
                rectangle.strokeStyle = strokeStyle;
                rectangle.stroke();
            }

            return rectangle;
        },

        start2d: function() {
            var context = Canvas.get().getContext('2d');
            context.beginPath();
            return context;
        }
    };

    return new Draw();
});