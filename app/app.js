'use strict';
// setting Firebase configuration
const config = {
    apiKey: "AIzaSyA0bkXA033r8RAm8r802S90gjp9Q__UpyQ",
    databaseURL: "https://house-hunting-16b43.firebaseio.com",
};

firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

// variables
var address = document.querySelector("#address"),
    rooms = document.querySelector("#rooms"),
    baths = document.querySelector("#baths"),
    price = document.querySelector("#price"),
    add = docuument.querySelector('#add-btn'),
    updateButton = document.querySelector("updateButton"),
    myDataRef = new Firebase('https://esolar.firebaseio.com/'),
    currentListRef = myDataRef.child("currentMesg");

// shows add listing form
var formDrop = () =>{
    add.addEventListner('click', function(){
        
    });
}
