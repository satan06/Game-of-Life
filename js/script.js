var fps = 60;
var canvas;
var context;
var height = 0;
var width = 0;
var m = matrixArray(54, 32);

window.onload = function() 
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
    interface();
    canvas.onmousedown = AddLife;
}

function matrixArray(rows,columns)
{
    var arr = new Array();
    for(var i = 0; i < columns; i++){
        arr[i] = new Array();
        for(var j = 0; j < rows; j++){
            arr[i][j] = 0;
        }
    }
  return arr;
}

function AddLife(event) 
{
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    var r = 0;
    var c = 0;

    while (y > 25) {
        r++;
    }

    while (x > 25) {
        c++;
    }

    m[r][c] = 1;
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