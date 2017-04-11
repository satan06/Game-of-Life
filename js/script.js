var fps = 60;
var canvas;
var context;
var height = 0;
var width = 0;

window.onload = function() 
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
    interface();
}

function interface()
{
    context.beginPath();
    context.strokeStyle = "green"
    context.moveTo(width, height);
    context.lineTo(canvas.width, height);
    context.lineTo(canvas.width, canvas.height);
    context.stroke();
    while (height != canvas.height) {
        while (width != canvas.width) {
            context.beginPath();
            context.strokeStyle = "green"
            context.moveTo(width, height);
            context.lineTo(width, height + 25);
            context.lineTo(width + 25, height + 25);
            context.stroke();
            width += 25;
        }
        width = 0;
        height += 25;
    }
}