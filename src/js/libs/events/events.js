define(['libs/events/paddleMovement'], function(PaddleMovement) {
    var Events = function() {};
    Events.prototype = {
        listen: function() {
            PaddleMovement.listen();
        }
    };

    return new Events();
});