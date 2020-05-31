
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
document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseenter", setPosition);

// last known position
var pos = { x: 0, y: 0 };

function mouseDown(e){
	setPosition(e);
	
	
	var colour = document.getElementById("hex").value;
	var width = document.getElementById("pen_width").value;
	ctx.beginPath();
	ctx.arc(pos.x, pos.y, width/2, 0, 2 * Math.PI);
	ctx.fillStyle = colour;
	ctx.fill(); 
}

// new position from mouse events
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

function draw(e) {
  if (e.buttons !== 1) return; 

  var colour = document.getElementById("hex").value;
  var width = document.getElementById("pen_width").value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = width;
  ctx.lineCap = "round"; 
  ctx.strokeStyle = colour;

  ctx.moveTo(pos.x, pos.y); 
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); 

  ctx.stroke(); 
}
<canvas id = 'canvas'></canvas>
<script>
    var canvas1 = document.getElementById('canvas')
    console.log('canvas size',canvas1.width, canvas1.height)
    var ctx = canvas1.getContext('2d')
    ctx.font = 'Bold 48px Arial'
    var f = ctx.font
    canvas1.width = 480
    var f1 = ctx.font
    alert(f === f1) //false
</script>
