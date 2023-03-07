let container = document.querySelector("container");
let gridButton = document.getElementById("submit-grid");
let clearGridButton = document.getElementById("clear-grid");
let gridWidth = document.getElementById("X-range");
let gridHeight = document.getElementById("Y-range");
let colorButton = document.getElementById("color-input");
let eraseBtn = document.getElementById("erase-btn");
let paintBtn = document.getElementById("paint-btn");
let widthValue = document.getElementById("X-value");
let heightValue = document.getElementById("Y-value");



 //event object

let events = {
    mouse :{
        down: "mousedown", move:"mousemove", up:"mouseup",
    },
    touch:{
        down: "touchstart", move:"touchmove", up:"touchend",
    },
};

// dorw and erase for //






