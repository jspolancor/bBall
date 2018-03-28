function simulateMouseEvent(target, options = {}, type) {

    const event = target.ownerDocument.createEvent('MouseEvents'); // MouseEvents event type

    const opts = {
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
        relatedTarget: null,
        ...options
    };
    
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

var canvas  = document.querySelector('canvas');
var x       = window.innerWidth / 2;
var y       = window.innerHeight;

/**
 * Shoots a ball
 * 
 */
function bBall() {
    simulateMouseEvent(canvas, { clientX: x, clientY: y * 0.68 }, 'mousedown');
    simulateMouseEvent(canvas, { clientX: x, clientY: y * 0.43 }, 'mouseup');
}

/**
 * Creates a sequence of ball shoots
 * 
 * @param {int} mainIntervalTime Time in miliseconds for the main interval
 * @param {int} ballsNumber Number of balls to shoot each interval
 * @param {int} timeBetweenBalls time in miliseconds between shootings
 * @param {int} maxShoots max ammount of shoots to make before killing the interval
 */
function bBallSequence(mainIntervalTime, ballsNumber, timeBetweenBalls, maxShoots){
    let shootCounter = 0;    
    const sequenceInterval = setInterval(() => {
        for (let i = 0; i < ballsNumber; i++) {     
            setTimeout(() => {                
                shootCounter ++;    
                shootCounter === maxShoots ? clearInterval(sequenceInterval) : bBall();                                
            }, timeBetweenBalls * i);
        }        
    }, mainIntervalTime);    
}

// Init ball sequence
bBallSequence(1750, 3, 200, 20);




