"use strict";

var options = {
    // root: document.querySelector('#scrollArea'),
    root: document.querySelector('.schools__header'),
    rootMargin: '0px',
    threshold: 1.5
}
var callback = function (entries, observer) {
    /* Content excerpted, show below */
};
var observer = new IntersectionObserver(callback, options);