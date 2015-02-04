/**
 * Random class will help provide an easy random number generator.
 *
 */
define([], function() {
    var Random = function() {};
    Random.prototype = {
        generate: function(max) {
            return Math.floor(Math.random() * (max + 1));
        }
    };

    return new Random();
});