var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)

var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};

var mousein = false
function demo() {
    if (mousein) return
    document.getElementById('demo' + count++)
        .classList.toggle('hover')

}

function demo2() {
    if (mousein) return
    document.getElementById('demo2')
        .classList.toggle('hover')
}

function reset() {
    count = 1
    var hovers = document.querySelectorAll('.hover')
    for (var i = 0; i < hovers.length; i++) {
        hovers[i].classList.remove('hover')
    }
}

document.addEventListener('mouseover', function () {
    mousein = true
    reset()
})
$(document).ready(function () {
    (function () {
        'use strict';

        class Menu {
            constructor(settings) {
                this.menuNode = settings.menuNode;
                this.state = false;
                this.menuStateTextNode = settings.menuStateTextNode || this.menuNode.querySelector('.menu__screen-reader');
                this.menuOpenedText = settings.menuOpenedText || 'Open menu';
                this.menuClosedText = settings.menuClosedText || 'Close menu';
            }

            changeState(state) {
                return this.state = !state;
            }

            changeStateText(state, node) {
                let text = (state !== true) ? this.menuOpenedText : this.menuClosedText;

                node.textContent = text;
                return text;
            }

            toggleMenuState(className) {

                let state;

                if (typeof className !== 'string' || className.length === 0) {
                    return console.log('you did not give the class for the toggleState function');
                }

                state = this.changeState(this.state);

                this.changeStateText(state, this.menuStateTextNode);
                this.menuNode.classList.toggle(className);

                return state;
            }
        }

        const jsMenuNode = document.querySelector('.menu');
        const demoMenu = new Menu({
            menuNode: jsMenuNode
        });

        function callMenuToggle(event) {
            demoMenu.toggleMenuState('menu_activated');
        }

        jsMenuNode.querySelector('.menu__toggle').addEventListener('click', callMenuToggle);
    })();


let burger = document.getElementById('burger'),
    nav = document.getElementById('main-nav');

burger.addEventListener('click', function (e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});

slowmo.addEventListener('click', function (e) {
    this.classList.toggle('is-slowmo');
});

/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function (e) {
    slowmo.dispatchEvent(clickEvent);
    burger.dispatchEvent(clickEvent);

    setTimeout(function () {
        burger.dispatchEvent(clickEvent);

        setTimeout(function () {
            slowmo.dispatchEvent(clickEvent);
        }, 3500);
    }, 5500);
});
});
