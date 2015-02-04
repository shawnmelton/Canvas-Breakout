define(['libs/elements/paddle'], function(Paddle) {
    var PaddleMovement = function() {};
    PaddleMovement.prototype = {
        onKeyPress: function(evt) {
            if(evt.keyCode === 37) {
                Paddle.move('left');
            } else if(evt.keyCode === 39) {
                Paddle.move('right');
            }
        },

        listen: function() {
            var _this = this;
            document.addEventListener('keydown', function(evt) {
                _this.onKeyPress(evt);
            }, false);
        }
    };

    return new PaddleMovement();
});