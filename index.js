
var canvas = document.getElementById("draw");

var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// add event listeners to specify when functions should be triggered
window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);

// last known position
var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; 

  var color = document.getElementById("hex").value;
  var width = document.getElementById("pen_width").value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = width;
  ctx.lineCap = "round"; 
  ctx.strokeStyle = color;

  ctx.moveTo(pos.x, pos.y); 
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); 

  ctx.stroke(); 
}
$(function ()
{
    var MouseDown = false;
    $('.mouseDownOnOut').mouseout(function ()
    {
        if (MouseDown)
        {
            alert('mouse was down when it left');
        }
        else
        {
            alert('mouse wasn\'t down when it left');   
        }
    });
    $('.mouseDownOnOut').mousedown(function ()
    {
        MouseDown = true;
    });
    $('.mouseDownOnOut').mouseup(function ()
    {
        MouseDown = false;
    });
});
