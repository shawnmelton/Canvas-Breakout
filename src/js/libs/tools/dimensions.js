/**
 * Dimensions class will track the initial sizes of:
 *
 * 1. Browser
 *
 */

define([], function() {
    var Dimensions = function(){};
    Dimensions.prototype = {
        instance: null,

        get: function() {
            if(this.instance === null) {
                this.set();
            }

            return this.instance;
        },

        set: function() {
            var browser = {
                width: window.innerWidth,
                height: window.innerHeight
            };

            this.instance = {
                browser: browser,
                canvas: {
                    width: parseInt(browser.width * 0.75),
                    height: parseInt(browser.height * 0.75)
                },
                paddle: {
                    width: browser.width * 0.058,
                    height: browser.height * 0.012
                },
                ball: {
                    size: browser.height * 0.02
                },
                block: {
                    width: browser.width / 12,
                    height: browser.height * 0.036
                }
            };

            this.validate();
        },

        // Make sure values make sense given the size of the browser.
        validate: function() {
            if(this.instance.paddle.width < 1) {
                this.instance.paddle = {
                    width: 1,
                    height: 3
                };   
            }
        }
    };

    return new Dimensions();
});