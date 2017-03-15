'use strict';

// variables

var address = document.querySelector("#address"),
    rooms = document.querySelector("#rooms"),
    baths = document.querySelector("#baths"),
    price = document.querySelector("#price"),
    add = document.querySelector('#display-lightbox'),
    lightbox = document.querySelector(".l-section-lightbox"),
    form = document.querySelector('form'),
    fields = document.querySelectorAll("fieldset"),
    updateButton = document.querySelector("#updateButton"),
    submit = document.querySelector("#submit-btn"),
    remove = document.querySelector("#remove-lightbox"),
    tl = new TimelineMax();

console.log("loaded");
// shows add listing form
var displayLightbox = function displayLightbox() {
    add.addEventListener('click', function () {
        tl.to(lightbox, .1, { css: { transform: "scale(1)" }, ease: Power4.easeOut }).from(form, .5, { y: -50, autoAlpha: 0, ease: Sine.easeOut }, '+=0.1').staggerFrom(fields, .5, { y: -10, autoAlpha: 0, ease: Sine.easeOut }, '+=0.1').from(submit, .5, { y: -30, autoAlpha: 0, ease: Sine.easeOut }, '+=0.1');
    });
};

var removeLightbox = function removeLightbox() {
    remove.addEventListener('click', function () {
        console.log("clicked remove");
        tl.to(lightbox, .9, { css: { transform: "scale(0)" }, ease: Power4.easeOut });
    });
};

displayLightbox();
removeLightbox();