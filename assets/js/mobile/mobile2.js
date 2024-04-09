var currentIndex = 0;
var newIndex = 0;

var slideElements = document.getElementsByClassName("slider_slide");
var slidesLength = slideElements.length;
var paginationElement = document.getElementsByClassName('slider_pagination')[0];
var navElements = document.getElementsByClassName("slider_nav");

var Autoplay = {
    timerId: null,
    interval: 10000,

    start: function() {
        this.timerId = setInterval(function() {
            newIndex++;
            navigateSlider();
        }, this.interval);
    },

    reset: function() {
        clearInterval(this.timerId);
        this.start();
    }
};

var ProgressBar = {
    element: document.getElementsByClassName('slider_progress-bar_bar')[0],
    timerId: null,

    start: function() {
        var _this = this;
        this.timerId = setTimeout(function() {
            _this.element.classList.add('slider_progress-bar_bar--moving');
        }, 500);
    },

    stop: function() {
        this.element.classList.remove('slider_progress-bar_bar--moving');
        clearTimeout(this.timerId);
    },

    reset: function() {
        this.stop();
        this.start();
    }
};

function navigateSlider() {
    if (enableAutoplay) {
        Autoplay.reset();
        if (enableProgressBar) {
            ProgressBar.reset();
        }
    }

    if (newIndex === -1) {
        newIndex = slidesLength - 1;
    }
    else if (newIndex === slidesLength) {
        newIndex = 0;
    }

    paginationElement.childNodes[currentIndex].classList.remove('slider_pagination_btn--sel');
    paginationElement.childNodes[newIndex].classList.add('slider_pagination_btn--sel');

    slideElements[currentIndex].style.opacity = '0';
    slideElements[currentIndex].style.visibility = 'hidden';
    slideElements[currentIndex].style.transition = '0.5s linear';

    slideElements[newIndex].style.opacity = '1';
    slideElements[newIndex].style.visibility = 'visible';
    slideElements[newIndex].style.transition = '0.5s linear 0.5s';

    currentIndex = newIndex;
}

navElements[0].addEventListener('click', function() {
    newIndex--;
    navigateSlider();
});

navElements[1].addEventListener('click', function() {
    newIndex++;
    navigateSlider();
});

var paginationHTML = [];
for (var i = 0; i < slidesLength; i++) {
    paginationHTML.push('<button class="slider_pagination_btn" data-index="' + i + '"></button>');
}
paginationElement.innerHTML = paginationHTML.join('');

paginationElement.addEventListener('click', function(e) {
    var target = e.target;
    if (target.classList.contains("slider_pagination_btn")) {
        newIndex = Number(target.getAttribute("data-index"));
        navigateSlider();
    }
});

var enableAutoplay = true;
var enableProgressBar = Boolean(ProgressBar.element);

if (enableProgressBar && !enableAutoplay) {
    throw new Error('enableAutoplay must be true when a progress bar is desired.');
}

if (enableAutoplay) {
    Autoplay.start();
    if (enableProgressBar) {
        ProgressBar.start();
    }
}

navigateSlider();