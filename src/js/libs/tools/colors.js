/**
 * Colors class will help provide an easy way to track fillStyle gradient colors.
 *
 */
define([], function() {
    var Colors = function() {};
    Colors.prototype = {
        set: [
            ['#820BBB', '#2E0854'],
            ['#3388ff', '#003388'],
            ['#008800', '#004400'],
            ['#e5e500', '#999900'],
            ['#cc6600', '#771100'],
            ['#ff1111', '#661111']
        ],

        get: function(index) {
            return (index > (this.set.length - 1)) ? this.set[0] : this.set[index];
        }
    };

    return new Colors();
});