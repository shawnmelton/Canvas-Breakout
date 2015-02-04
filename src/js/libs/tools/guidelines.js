/**
 * Guidelines class will help provide visual guides to determine placements on the canvas.
 *
 */
define(['libs/tools/draw', 'libs/tools/dimensions'], function(Draw, Dimensions) {
    var Guidelines = function() {};
    Guidelines.prototype = {
        color: '#222222',

        // Add guidelines marking the center of the canvas.
        addCenterGuide: function() {
            var middleY = (Dimensions.get().canvas.height / 2),
                middleX = (Dimensions.get().canvas.width / 2);

            Draw.line(0, middleY, Dimensions.get().canvas.width, middleY, this.color);
            Draw.line(middleX, 0, middleX, Dimensions.get().canvas.height, this.color);
        },

        render: function() {
            this.addCenterGuide();
        }
    };

    return new Guidelines();
});