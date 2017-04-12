var fps = 60;
var canvas;
var context;
var height = 0;
var width = 0;
var m = matrixArray(20, 20);

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
    for(var i = 0; i < columns; i++) {
        arr[i] = new Array();
        for(var j = 0; j < rows; j++) {
            arr[i][j] = 0;
        }
    }
  return arr;
}

function AddLife(event) 
{
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    var row = 0;
    var colum = 0;

    while (y > 25) {
        row++;
        y -= 25;
    }

    while (x > 25) {
        colum++;
        x -= 25;
    }
    if (event.which == 1) {
        if (m[row][colum] == 0) {
            m[row][colum] = 1;
            TestMatrix(m);
        } else {
            if (m[row][colum] == 1) {
                Death(row, colum);
            }
        }
    }
}

function Death(row, colum)
{
    m[row][colum] = 0;

    row *= 25;
    colum *= 25;

    context.clearRect(colum + 1, row + 1, 23, 23);
    
}

function TestMatrix(m, cursor) 
{
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 20; j++) {
            if (m[i][j] == 1) {
                draw(i, j);
            }
        }
    }
}

function draw(row, colum)
{
    row *= 25;
    colum *= 25;

    context.fillStyle = "#388eea";
    context.beginPath();
    context.rect(colum + 1, row + 1, 23, 23);
    context.closePath();
    context.fill();
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