// let clickMeButton = document.createElement('button');
// clickMeButton.id = 'btn';
// clickMeButton.className = 'buttonStyleClass';
// clickMeButton.innerHTML = 'Click Me';
// clickMeButton.style.background = '#4FFF8F';
// document.body.appendChild(clickMeButton);



/* This assigns the element with id 'btn' to var 'btn' */
let btn = document.getElementById('btn');
btn.innerHTML = 0;

/* This sets the action to perform on a click event */
btn.onclick = function() {
    /* This changes the button's label */
    btn.innerHTML++;
};