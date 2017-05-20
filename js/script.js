var fps = 60;
var canvas;
var context;
var height = 0;
var width = 0;
var status = 0;

var m = matrixArray(20, 20);

window.onload = function() 
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
    interface();
    canvas.onmousedown = AddLife;
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
            TestMatrix_draw();
        } else {
            if (m[row][colum] == 1) {
                Death_click(row, colum, m);
            }
        }
    }
}

function Death_click(row, colum, m)
{
    m[row][colum] = 0;

    row *= 25;
    colum *= 25;

    context.clearRect(colum + 1, row + 1, 23, 23);
    
}

function TestMatrix_draw() 
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

function Start_Life()
{
    var t = 0;
    var i, i_1;
    var j, j_1;

    for ( i = 0; i < 20; i++) {
        for ( j = 0; j < 20; j++) {
            if (m[i][j] == 0) {
                if (i >= 0 && j == 0) {
                    if (i == 0 && j == 0) {
                        if (m[i][j + 1] == 1 && m[i + 1][j] == 1 && m[i + 1][j + 1] == 1) {
                            t = 3;
                        }
                    }

                    if (i == 19 && j == 0) {
                        if (m[i][j + 1] == 1 && m[i - 1][j] == 1 && m[i - 1][j + 1] == 1) {
                            t = 3;
                        }
                    }

                    if (i > 0 && i < 19) {
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

                if (i >= 0 && j == 19) {
                    if (i == 0) {
                        if (m[i][j - 1] == 1 && m[i - 1][j] == 1 && m[i - 1][j + 1] == 1) {
                            t = 3;
                        }
                    }

                    if (i == 19) {
                        if (m[i][j - 1] == 1 && m[i - 1][j] == 1 && m[i - 1][j - 1] == 1) {
                            t = 3;
                        }
                    }

                    if (i > 0 && i < 19) {
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
                        if (m[i][j + 1] == 1 && m[i + 1][j] == 1 && m[i + 1][j + 1] == 1) {
                            t = 3;
                        }
                    }

                    if (j == 19) {
                        if (m[i][j - 1] == 1 && m[i + 1][j] == 1 && m[i - 1][j - 1] == 1) {
                            t = 3;
                        }
                    }

                    if (j > 0 && j < 19) {
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

                if (i == 19 && j >= 0) {
                    if (j == 0) {
                        if (m[i][j + 1] == 1 && m[i - 1][j] == 1 && m[i - 1][j + 1] == 1) {
                            t = 3;
                        }
                    }

                    if (j == 19) {
                        if (m[i][j - 1] == 1 && m[i - 1][j] == 1 && m[i - 1][j - 1] == 1) {
                            t = 3;
                        }
                    }

                    if (j > 0 && j < 19) {
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

                if (i > 0 && i < 19 && j > 0 && j < 19) {
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
                    m[i][j] == 2;
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

    for ( i = 0; i < 20; i++) {
        for ( j = 0; j < 20; j++) {
            if (m[i][j] == 1) {
                if (i >= 0 && j == 0) {
                    if (i == 0 && j == 0) {
                        if ((m[i][j + 1] == 1 || m[i][j + 1] == 2) && (m[i + 1][j] == 1 || m[i + 1][j] == 2) && (m[i + 1][j + 1] == 1 || m[i + 1][j + 1] == 2)) {
                            t = 3;
                        }
                    }

                    if (i == 19 && j == 0) {
                        if ((m[i][j + 1] == 1 || m[i][j + 1] == 2) && (m[i - 1][j] == 1 || m[i - 1][j] == 2) && (m[i - 1][j + 1] == 1 || m[i - 1][j + 1] == 2)) {
                            t = 3;
                        }
                    }

                    if (i > 0 && i < 19) {
                        for ( i_1 = -1; i_1 <= 1; i_1++) {
                            if (i_1 == -1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == 2) {
                                        t++;
                                    }
                                }
                            }

                            if (i_1 == 0) {
                                if (m[i][j + 1] == 1 || m[i][j + 1] == 2) {
                                    t++;
                                }
                            }

                            if (i_1 == 1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == 2) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i >= 0 && j == 19) {
                    if (i == 0) {
                        if ((m[i][j - 1] == 1 || m[i][j - 1] == 2) && (m[i - 1][j] == 1 || m[i - 1][j] == 2) && (m[i - 1][j + 1] == 1 || m[i - 1][j + 1] == 2)) {
                            t = 3;
                        }
                    }

                    if (i == 19) {
                        if ((m[i][j - 1] == 1 || m[i][j - 1] == 2) && (m[i - 1][j] == 1 || m[i - 1][j] == 2) && (m[i - 1][j - 1] == 1 || m[i - 1][j - 1] == 2)) {
                            t = 3;
                        }
                    }

                    if (i > 0 && i < 19) {
                        for ( i_1 = -1; i_1 <= 1; i_1++) {
                            if (i_1 == -1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j - j_1] == 1 || m[i + i_1][j - j_1] == 2) {
                                        t++;
                                    }
                                }
                            }

                            if (i_1 == 0) {
                                if (m[i][j - 1] == 1 || m[i][j - 1] == 2) {
                                    t++;
                                }
                            }

                            if (i_1 == 1) {
                                for (j_1 = 0; j_1 <=1; j_1++) {
                                    if (m[i + i_1][j - j_1] == 1 || m[i + i_1][j - j_1] == 2) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i == 0 && j >= 0) {
                    if (j == 0) {
                        if ((m[i][j + 1] == 1 || m[i][j + 1] == 2) && (m[i + 1][j] == 1 || m[i + 1][j] == 2) && (m[i + 1][j + 1] == 1 || m[i + 1][j + 1] == 2)) {
                            t = 3;
                        }
                    }

                    if (j == 19) {
                        if ((m[i][j - 1] == 1 || m[i][j - 1] == 2) && (m[i + 1][j] == 1 || m[i + 1][j] == 2) && (m[i - 1][j - 1] == 1 || m[i - 1][j - 1] == 2)) {
                            t = 3;
                        }
                    }

                    if (j > 0 && j < 19) {
                        for ( j_1 = -1; j_1 <= 1; j_1++) {
                            if (j_1 == -1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == 2) {
                                        t++;
                                    }
                                }
                            }

                            if (j_1 == 0) {
                                if (m[i + 1][j] == 1 || m[i + 1][j] == 2) {
                                    t++;
                                }
                            }

                            if (j_1 == 1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == 2) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i == 19 && j >= 0) {
                    if (j == 0) {
                        if ((m[i][j + 1] == 1 || m[i][j + 1] == 2) && (m[i - 1][j] == 1 || m[i - 1][j] == 2) && (m[i - 1][j + 1] == 1 || m[i - 1][j + 1] == 2)) {
                            t = 3;
                        }
                    }

                    if (j == 19) {
                        if ((m[i][j - 1] == 1 || m[i][j - 1] == 2) && (m[i - 1][j] == 1 || m[i - 1][j] == 2) && (m[i - 1][j - 1] == 1 || m[i - 1][j - 1] == 2)) {
                            t = 3;
                        }
                    }

                    if (j > 0 && j < 19) {
                        for ( j_1 = -1; j_1 <= 1; j_1++) {
                            if (j_1 == -1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i - i_1][j + j_1] == 1 || m[i - i_1][j + j_1] == 2) {
                                        t++;
                                    }
                                }
                            }

                            if (j_1 == 0) {
                                if (m[i - 1][j] == 1 || m[i - 1][j] == 2) {
                                    t++;
                                }
                            }

                            if (j_1 == 1) {
                                for (i_1 = 0; i_1 <=1; i_1++) {
                                    if (m[i - i_1][j + j_1] == 1 || m[i - i_1][j + j_1] == 2) {
                                        t++;
                                    }
                                }
                            }
                        }
                    }
                }

                if (i > 0 && i < 19 && j > 0 && j < 19) {
                    for (j_1 = -1; j_1 <= 1; j_1++) {
                        if (j_1 == -1) {
                            for (i_1 = -1; i_1 <= 1; i_1++) {
                                if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == 2) {
                                    t++;
                                }
                            }
                        }

                        if (j_1 == 0) {
                            for (i_1 = -1; i_1 <= 1; i_1 += 2) {
                                if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == 2) {
                                    t++;
                                }
                            }
                        }

                        if (j_1 == 1) {
                            for (i_1 = -1; i_1 <= 1; i_1++) {
                                if (m[i + i_1][j + j_1] == 1 || m[i + i_1][j + j_1] == 2) {
                                    t++;
                                }
                            }
                        }
                    }
                }

                if (t < 2 || t > 3) {
                    m[i][j] == 0;
                }
            }

            t = 0;
        }
    }
}

function Swap_number()
{
    var i, j;

    for (i = 0; i < 20; i++) {
        for (j = 0; j < 20; j++) {
            if (m[i][j] == 2) {
                m[i][j] = 1;
            }
        }
    }
}

function Stop() {
    status = 0;
}

function Start() 
{
    status = 1;

    while (status == 1) {
        Start_Life();
        Death_Generation();
        Swap_number();
        TestMatrix_draw();
    }
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