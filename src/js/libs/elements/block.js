define([
    'libs/tools/dimensions',
    'libs/tools/draw',
    'libs/tools/random',
    'libs/tools/colors'
    ], function(Dimensions, Draw, Random, Colors) {
    var Block = function(row, column) {
        this.row = row;
        this.column = column;
        this.el = null;
        this.broken = false;
    };

    Block.prototype = {
        build: function() {
            this.el = Draw.rectangle(
                this.column * Dimensions.get().block.width,
                this.row * Dimensions.get().block.height,
                Dimensions.get().block.width,
                Dimensions.get().block.height,
                Colors.get(this.row),
                '#111111'
            );
        },

        get: function() {
            if(this.el === null) {
                this.build();
            }

            return this.el;
        }
    };

    return Block;
});