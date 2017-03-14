'use strict';

// variables

var address = document.querySelector("#address"),
    rooms = document.querySelector("#rooms"),
    baths = document.querySelector("#baths"),
    price = document.querySelector("#price"),
    add = document.querySelector('#display-lightbox'),
    lightbox = document.querySelector(".l-section-lightbox"),
    updateButton = document.querySelector("#updateButton");

console.log("loaded");
// shows add listing form
var displayLightbox = function displayLightbox() {
    add.addEventListener('click', function () {
        console.log("clicked");
        lightbox.style.transform = "scale(1)";
        lightbox.style.borderRadius = 0;
    });
};

displayLightbox();