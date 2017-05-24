canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

var fps = 60;
var canvas;
var context;
var height = 0;
var width = 0;
var status = 0;
var cell_x = canvas.width / 10;
var cell_y = canvas.height / 10;
var m = matrixArray(cell_x, cell_y);


window.onload = function() 
{
    interface();
    canvas.onmousedown = AddLife;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function matrixArray(rows, columns)
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

    while (y > 10) {
        row++;
        y -= 10;
    }

    while (x > 10) {
        colum++;
        x -= 10;
    }

    if (event.which == 1) {
        if (m[row][colum] == 0) {
            m[row][colum] = 1;
            TestMatrix_draw();
        } else {
            if (m[row][colum] == 1) {
                Death_click(row, colum);
            }
        }
    }
}

function Death_click(row, colum)
{
    m[row][colum] = 0;

    row *= 10;
    colum *= 10;

    context.clearRect(colum + 1, row + 1, 8, 8);
    
}

function TestMatrix_draw() 
{
    for (var i = 0; i < cell_y; i++) {
        for (var j = 0; j < cell_x; j++) {
            if (m[i][j] == 1) {
                draw(i, j);
            }

            if (m[i][j] == 0) {
                Death_click(i, j);
            }
        }
    }
}

function draw(row, colum)
{
    row *= 10;
    colum *= 10;

    context.fillStyle = "#388eea";
    context.beginPath();
    context.rect(colum + 1, row + 1, 8, 8);
    context.closePath();
    context.fill();
}

function Start_Life()
{
    var t = 0;
    var i = 0, i_1 = 0;
    var j = 0, j_1 = 0;

    for (i = 0; i < cell_y; i++) {
        for (j = 0; j < cell_x; j++) {
            if (m[i][j] == 0) {
                if (i >= 0 && j == 0) {
                    if (i == 0 && j == 0) {
                        if (m[i][j + 1] == 1) {
                            t++;
                        }

                        if (m[i + 1][j] == 1) {
                            t++;
                        }

                        if (m[i + 1][j + 1] == 1) {
                            t++;
                        }
                    }

                    if (i == (cell_y - 1) && j == 0) {
                        if (m[i][j + 1] == 1) {
                            t++;
                        }

                        if (m[i - 1][j] == 1) {
                            t++;
                        }

                        if (m[i - 1][j + 1] == 1) {
                            t++;
                        }
                    }

                    if (i > 0 && i < (cell_y - 1)) {
                        for ( i_1 = -1; i_1 <= 1; i_1++) {
                            if (i_1 == -1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j + j_1] == 1) {
                                        t++;
                                    }
                                }
                            }

                            if (i_1 == 0) {
                                if (m[i][j + 1] == 1) {
                                    t++;
                                }
                            }

                            if (i_1 == 1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j + j_1] == 1) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i >= 0 && j == (cell_x - 1)) {
                    if (i == 0) {
                        if (m[i][j - 1] == 1) {
                            t++;
                        }
                        
                        if (m[i + 1][j] == 1) {
                            t++;
                        }

                        if (m[i + 1][j + 1] == 1) {
                            t++;
                        }
                    }

                    if (i == (cell_y - 1)) {
                        if (m[i][j - 1] == 1) {
                            t++;
                        }

                        if (m[i - 1][j] == 1) {
                            t++;
                        }

                        if (m[i - 1][j - 1] == 1) {
                            t++;
                        }
                    }

                    if (i > 0 && i < (cell_y - 1)) {
                        for ( i_1 = -1; i_1 <= 1; i_1++) {
                            if (i_1 == -1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j - j_1] == 1) {
                                        t++;
                                    }
                                }
                            }

                            if (i_1 == 0) {
                                if (m[i][j - 1] == 1) {
                                    t++;
                                }
                            }

                            if (i_1 == 1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j - j_1] == 1) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i == 0 && j >= 0) {
                    if (j == 0) {
                        if (m[i][j + 1] == 1) {
                            t++;
                        }

                        if (m[i + 1][j] == 1) {
                            t++;
                        }

                        if (m[i + 1][j + 1] == 1) {
                            t++;
                        }
                    }

                    if (j == (cell_x - 1)) {
                        if (m[i][j - 1] == 1) {
                            t++;
                        }

                        if (m[i + 1][j] == 1) {
                            t++;
                        }

                        if (m[i + 1][j - 1] == 1) {
                            t++;
                        }
                    }

                    if (j > 0 && j < (cell_x - 1)) {
                        for ( j_1 = -1; j_1 <= 1; j_1++) {
                            if (j_1 == -1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i + i_1][j + j_1] == 1) {
                                        t++;
                                    }
                                }
                            }

                            if (j_1 == 0) {
                                if (m[i + 1][j] == 1) {
                                    t++;
                                }
                            }

                            if (j_1 == 1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i + i_1][j + j_1] == 1) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i == (cell_y - 1) && j >= 0) {
                    if (j == 0) {
                        if (m[i][j + 1] == 1) {
                            t++;
                        }

                        if (m[i - 1][j] == 1) {
                            t++;
                        }

                        if (m[i - 1][j + 1] == 1) {
                            t++;
                        }
                    }

                    if (j == (cell_x - 1)) {
                        if (m[i][j - 1] == 1) {
                            t++;
                        }

                        if (m[i - 1][j] == 1) {
                            t++;
                        }

                        if (m[i - 1][j - 1] == 1) {
                            t++;
                        }
                    }

                    if (j > 0 && j < (cell_x - 1)) {
                        for ( j_1 = -1; j_1 <= 1; j_1++) {
                            if (j_1 == -1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i - i_1][j + j_1] == 1) {
                                        t++;
                                    }
                                }
                            }

                            if (j_1 == 0) {
                                if (m[i - 1][j] == 1) {
                                    t++;
                                }
                            }

                            if (j_1 == 1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i - i_1][j + j_1] == 1) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i > 0 && i < (cell_y - 1) && j > 0 && j < (cell_x - 1)) {
                    for (j_1 = -1; j_1 <= 1; j_1++) {
                        if (j_1 == -1) {
                            for (i_1 = -1; i_1 <= 1; i_1++) {
                                if (m[i + i_1][j + j_1] == 1) {
                                    t++;
                                }
                            }
                        }

                        if (j_1 == 0) {
                            for (i_1 = -1; i_1 <= 1; i_1 += 2) {
                                if (m[i + i_1][j + j_1] == 1) {
                                    t++;
                                }
                            }
                        }

                        if (j_1 == 1) {
                            for (i_1 = -1; i_1 <= 1; i_1++) {
                                if (m[i + i_1][j + j_1] == 1) {
                                    t++;
                                }
                            }
                        }
                    }
                }

                if (t == 3) {
                    m[i][j] = 2;
                }
            }
            t = 0;
        }
    }
}

function Death_Generation() 
{
    var t = 0;
    var i, i_1;
    var j, j_1;

    for ( i = 0; i < cell_y; i++) {
        for ( j = 0; j < cell_x; j++) {
            if (m[i][j] == 1) {
                if (i >= 0 && j == 0) {
                    if (i == 0 && j == 0) {
                        if (m[i][j + 1] == 1 || m[i][j + 1] == -1) {
                            t++;
                        }

                        if (m[i + 1][j] == 1 || m[i + 1][j] == -1) {
                            t++;
                        }

                        if (m[i + 1][j + 1] == 1 || m[i + 1][j + 1] == -1) {
                            t++;
                        }
                    }

                    if (i == (cell_y - 1) && j == 0) {
                        if (m[i][j + 1] == 1 || m[i][j + 1] == -1) {
                            t++;
                        }

                        if (m[i - 1][j] == 1 || m[i - 1][j] == -1) {
                            t++;
                        }

                        if (m[i - 1][j + 1] == 1 || m[i - 1][j + 1] == -1) {
                            t++;
                        }
                    }

                    if (i > 0 && i < (cell_y - 1)) {
                        for ( i_1 = -1; i_1 <= 1; i_1++) {
                            if (i_1 == -1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == -1) {
                                        t++;
                                    }
                                }
                            }

                            if (i_1 == 0) {
                                if (m[i][j + 1] == 1 || m[i][j + 1] == -1) {
                                    t++;
                                }
                            }

                            if (i_1 == 1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == -1) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i >= 0 && j == (cell_x - 1)) {
                    if (i == 0) {
                        if (m[i][j - 1] == 1 || m[i][j - 1] == -1) {
                            t++;
                        }

                        if (m[i + 1][j] == 1 || m[i + 1][j] == -1) {
                            t++;
                        }

                        if (m[i + 1][j + 1] == 1 || m[i + 1][j + 1] == -1) {
                            t++;
                        }
                    }

                    if (i == (cell_y - 1)) {
                        if (m[i][j - 1] == 1 || m[i][j - 1] == -1) {
                            t++;
                        }

                        if (m[i - 1][j] == 1 || m[i - 1][j] == -1) {
                            t++;
                        }

                        if (m[i - 1][j - 1] == 1 || m[i - 1][j - 1] == -1) {
                            t++;
                        }
                    }

                    if (i > 0 && i < (cell_y - 1)) {
                        for ( i_1 = -1; i_1 <= 1; i_1++) {
                            if (i_1 == -1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j - j_1] == 1 || m[i + i_1][j - j_1] == -1) {
                                        t++;
                                    }
                                }
                            }

                            if (i_1 == 0) {
                                if (m[i][j - 1] == 1 || m[i][j - 1] == -1) {
                                    t++;
                                }
                            }

                            if (i_1 == 1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j - j_1] == 1 || m[i + i_1][j - j_1] == -1) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i == 0 && j >= 0) {
                    if (j == 0) {
                        if (m[i][j + 1] == 1 || m[i][j + 1] == -1) {
                            t++;
                        }

                        if (m[i + 1][j] == 1 || m[i + 1][j] == -1) {
                            t++;
                        }

                        if (m[i + 1][j + 1] == 1 || m[i + 1][j + 1] == -1) {
                            t++;
                        }
                    }

                    if (j == (cell_x - 1)) {
                        if (m[i][j - 1] == 1 || m[i][j - 1] == -1) {
                            t++;
                        }

                        if (m[i + 1][j] == 1 || m[i + 1][j] == -1) {
                            t++;
                        }

                        if (m[i + 1][j - 1] == 1 || m[i + 1][j - 1] == -1) {
                            t++;
                        }
                    }

                    if (j > 0 && j < (cell_x - 1)) {
                        for ( j_1 = -1; j_1 <= 1; j_1++) {
                            if (j_1 == -1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == -1) {
                                        t++;
                                    }
                                }
                            }

                            if (j_1 == 0) {
                                if (m[i + 1][j] == 1 || m[i + 1][j] == -1) {
                                    t++;
                                }
                            }

                            if (j_1 == 1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == -1) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i == (cell_y - 1) && j >= 0) {
                    if (j == 0) {
                        if (m[i][j + 1] == 1 || m[i][j + 1] == -1) {
                            t++;
                        }

                        if (m[i - 1][j] == 1 || m[i - 1][j] == -1) {
                            t++;
                        }

                        if (m[i - 1][j + 1] == 1 || m[i - 1][j + 1] == -1) {
                            t++;
                        }
                    }

                    if (j == (cell_x - 1)) {
                        if (m[i][j - 1] == 1 || m[i][j - 1] == -1) {
                            t++;
                        }

                        if (m[i - 1][j] == 1 || m[i - 1][j] == -1) {
                            t++;
                        }

                        if (m[i - 1][j - 1] == 1 || m[i - 1][j - 1] == -1) {
                            t++;
                        }
                    }

                    if (j > 0 && j < (cell_x - 1)) {
                        for ( j_1 = -1; j_1 <= 1; j_1++) {
                            if (j_1 == -1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i - i_1][j + j_1] == 1 || m[i - i_1][j + j_1] == -1) {
                                        t++;
                                    }
                                }
                            }

                            if (j_1 == 0) {
                                if (m[i - 1][j] == 1 || m[i - 1][j] == -1) {
                                    t++;
                                }
                            }

                            if (j_1 == 1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i - i_1][j + j_1] == 1 || m[i - i_1][j + j_1] == -1) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i > 0 && i < (cell_y - 1) && j > 0 && j < (cell_x - 1)) {
                    for (j_1 = -1; j_1 <= 1; j_1++) {
                        if (j_1 == -1) {
                            for (i_1 = -1; i_1 <= 1; i_1++) {
                                if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == -1) {
                                    t++;
                                }
                            }
                        }

                        if (j_1 == 0) {
                            for (i_1 = -1; i_1 <= 1; i_1 += 2) {
                                if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == -1) {
                                    t++;
                                }
                            }
                        }

                        if (j_1 == 1) {
                            for (i_1 = -1; i_1 <= 1; i_1++) {
                                if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == -1) {
                                    t++;
                                }
                            }
                        }
                    }
                }

                if (t < 2 || t > 3) {
                    m[i][j] = -1;
                }
            }

            t = 0;
        }
    }
}

function Clear()
{
    location.reload();
}

function Stop()
{
    status = 0;
}

function Start() 
{
    status = 1;
}

function Swap_number()
{
    for (var i = 0; i < cell_y; i++) {
       for (var j = 0; j < cell_x; j++) {
            if (m[i][j] == 2) {
                m[i][j] = 1;
            }

            if (m[i][j] == -1) {
                m[i][j] = 0;
            }
        }
    }
}

function Random_Life()
{
    for (var i = 0; i < cell_y; i++) {
       for (var j = 0; j < cell_x; j++) {
            m[i][j] = getRandomInt(0, 2);         
        }
    }

    TestMatrix_draw();
}

setInterval(function () {
    if (status == 1) {
        Start_Life();
        Death_Generation();
        Swap_number();
        TestMatrix_draw();
    }
}, 50);

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
            context.lineTo(width, height + 10);
            context.lineTo(width + 10, height + 10);
            context.stroke();
            width += 10;
        }
        width = 0;
        height += 10;
    }
}