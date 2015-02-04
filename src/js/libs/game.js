/**
 * Game class will begin the game with the follow steps:
 *
 * 1. Build canvas
 * 2. Activate GUI elements
 * 3. Wait for user events.
 *
 */

define([
    'libs/elements/canvas',
    'libs/elements/paddle',
    'libs/elements/ball',
    'libs/tools/guidelines'
], function(Canvas, Paddle, Ball, Guidelines) {
    var Game = function() {};
    Game.prototype = {
        start: function() {
            // Turn this off for live version.
            Guidelines.render();

            Canvas.render();
            Paddle.render();
            Ball.render();
        }
    };

    return new Game(); // Singleton.
});