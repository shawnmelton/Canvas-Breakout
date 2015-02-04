define(['libs/elements/block'], function(Block) {
    var Blocks = function() {};
    Blocks.prototype = {
        rows: 6,
        cols: 12,
        children: [],

        render: function() {
            for(var i = 0; i < this.rows; i++) {
                for(var j = 0; j < this.cols; j++) {
                    this.children.push(new Block(i, j).get());
                }
            }
        }
    };

    return new Blocks();
});