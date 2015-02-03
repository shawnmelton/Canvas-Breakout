/**
 * Defer loading file until after page is done rendering.
 */
var loadFile = function(element) {
        var loadDeferredFile = function(el) {
            document.head.appendChild(el);
        };

        if (window.addEventListener) {
            window.addEventListener('load', function() {
                loadDeferredFile(element);
            }, false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', function() {
                loadDeferredFile(element);
            });
        } else {
            window.onload = function() {
                loadDeferredFile(element);
            };
        }
    },

    /**
     * Load a script file after the page has finished rendering.
     */
    loadScript = function(source) {
        var script = document.createElement('script');
        script.src = source;
        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.async = true;
        loadFile(script);
    },

    /**
     * Load a stylesheet after the page has finished rendering.
     */
    loadStyle = function(source) {
        var stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.type = 'text/css';
        stylesheet.href = source;
        loadFile(stylesheet);
    };

var cacheBuster = new Date().getTime();

loadStyle('/css/styles.css?r='+ cacheBuster);
loadScript('/js/app.js?r='+ cacheBuster);