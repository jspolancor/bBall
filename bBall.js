function simulateMouseEvent(target, options, type) {
    var event = target.ownerDocument.createEvent("MouseEvents"),
        options = options || {},
        opts = {
            type: type,
            canBubble: true,
            cancelable: true,
            view: target.ownerDocument.defaultView,
            detail: 1,
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            button: 0,
            relatedTarget: null
        };

    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            opts[key] = options[key];
        }
    }

    event.initMouseEvent(
        opts.type,
        opts.canBubble,
        opts.cancelable,
        opts.view,
        opts.detail,
        opts.screenX,
        opts.screenY,
        opts.clientX,
        opts.clientY,
        opts.ctrlKey,
        opts.altKey,
        opts.shiftKey,
        opts.metaKey,
        opts.button,
        opts.relatedTarget
    );

    target.dispatchEvent(event);
};

var canvas = document.querySelector("canvas");

function bBall() {
    simulateMouseEvent(
        canvas,
        { clientX: 700, clientY: 626 },
        "mousedown"
    );

    simulateMouseEvent(
        canvas,
        { clientX: 700, clientY: 400 },
        "mouseup"
    );
}

setInterval(function () {   
    bBall(); 
    setTimeout(function () {
        bBall();        
    }, 200);
    setTimeout(function () {
        bBall();        
    }, 400);    
}, 1750);



