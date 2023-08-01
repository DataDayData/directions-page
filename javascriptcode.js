// Prevent the default form from opening empty PHP page 
var form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    var formData = new FormData(form); 
    var xhr = new XMLHttpRequest(); 
    xhr.open("POST", "connect.php", true); 
    xhr.send(formData); 
});

function drawArrow(direction) {
  // Create a new window to draw the arrow in
  var newWindow = window.open("", "Arrow", "width=50,height=50");
  var newDocument = newWindow.document;
  // Create a canvas element in the new window
  var canvas = newDocument.createElement("canvas");
  canvas.width = 50;
  canvas.height = 50;
  newDocument.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.beginPath();

  switch (direction) {
    case "up":
        ctx.moveTo(25, 50);
        ctx.lineTo(25, 10);
        ctx.lineTo(20, 15);
        ctx.moveTo(25, 10);
        ctx.lineTo(30, 15);
        break;
    case "backward":
        ctx.moveTo(25, 10);
        ctx.lineTo(25, 45);
        ctx.lineTo(20, 40);
        ctx.moveTo(25, 45);
        ctx.lineTo(30, 40);
        break;
    case "left":
        ctx.moveTo(50, 25);
        ctx.lineTo(10, 25);
        ctx.lineTo(15, 20);
        ctx.moveTo(10, 25);
        ctx.lineTo(15, 30);
        break;
    case "right":
        ctx.moveTo(10, 25);
        ctx.lineTo(45, 25);
        ctx.lineTo(40, 20);
        ctx.moveTo(45, 25);
        ctx.lineTo(40, 30);
        break;
    default:
        break;
  }
  ctx.closePath();
  ctx.stroke();
}


/////////////////////////////////

// Get the button element
var rec1 = document.getElementById("rectangular1");
// Set the button's position
rec1.style.position = "absolute";
rec1.style.left = "80px";
rec1.style.top = "400px";


////////////////////////////////////////////////////////


// Save the button's original border color
var rec1BorderColor = rec1.style.borderColor;

// Change the button's border color and box shadow when the mouse is over the button
rec1.addEventListener("mouseover", function() {
  rec1.style.borderColor = "blue";
  rec1.style.boxShadow = "blue";
});

// Restore the button's original border color and box shadow when the mouse leaves the button
rec1.addEventListener("mouseout", function() {
  rec1.style.borderColor = rec1BorderColor; 
  rec1.style.boxShadow = "";
});

var stop1 = document.getElementById("stopp");
stop1.style.position = "absolute";
stop1.style.left = "450px";
stop1.style.top = "250px";


var stop1BorderColor = stop1.style.borderColor;

stop1.addEventListener("mouseover", function() {
stop1.style.borderColor = "blue";
stop1.style.boxShadow = "blue";
});

stop1.addEventListener("mouseout", function() {
stop1.style.borderColor = stop1BorderColor; 
stop1.style.boxShadow = ""; 
});

var left1 = document.getElementById("left");
left1.style.position = "absolute";
left1.style.left = "300px";
left1.style.top = "400px";


var left1BorderColor = left1.style.borderColor;

left1.addEventListener("mouseover", function() {
left1.style.borderColor = "blue";
left1.style.boxShadow = "blue";
});

left1.addEventListener("mouseout", function() {
left1.style.borderColor = left1BorderColor; 
left1.style.boxShadow = ""; 
});

var right1 = document.getElementById("right");
right1.style.position = "absolute";
right1.style.left = "850px";
right1.style.top = "400px";


var right1BorderColor = right1.style.borderColor;

right1.addEventListener("mouseover", function() {
right1.style.borderColor = "blue";
right1.style.boxShadow = "blue";
});

right1.addEventListener("mouseout", function() {
right1.style.borderColor = right1BorderColor; 
right1.style.boxShadow = ""; 
});

var backward1 = document.getElementById("backward");
backward1.style.position = "absolute";
backward1.style.left = "630px";
backward1.style.top = "400px";

// Save the original border-color value as a variable
var backward1BorderColor = backward1.style.borderColor;
backward1.addEventListener("mouseover", function() {
backward1.style.borderColor = "blue";
backward1.style.boxShadow = "blue";
});

backward1.addEventListener("mouseout", function() {
backward1.style.borderColor = backward1BorderColor; 
backward1.style.boxShadow = ""; 
});






