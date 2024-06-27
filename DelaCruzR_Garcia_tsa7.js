c = document.getElementById("container");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let grow = 0;


function resetall() {
    c.style.flexDirection = "row";
    c.style.justifyContent = "flex-start";
    c.style.alignItems = "Start";
    c.style.gap = "0px";

    box1.style.flexGrow = "0";
    box2.style.flexGrow = "0";
    box3.style.flexGrow = "0";

}


function inputgap(x) {
    doc.style.gap = x + "px";
}


function flexd(x) {
    let c = document.getElementById("container");
    if (x == 1) {
        c.style.flexDirection = "Row";
    } else if (x == 2) {
        c.style.flexDirection = "Column";
    }
}

function jc(x) {
    let c = document.getElementById("container");
    if (x == 1) {
        c.style.justifyContent = "Start";
    } else if (x == 2) {
        c.style.justifyContent = "Center";
    } else if (x == 3) {
        c.style.justifyContent = "End";
    } else if (x == 4) {
        c.style.justifyContent = "Space-Between";
    } else if (x == 5) {
        c.style.justifyContent = "Space-Around";
    } else if (x == 6) {
        c.style.justifyContent = "Space-Evenly";
    }
}

function ai(x) {
    let c = document.getElementById("container");
    if (x == 1) {
        c.style.alignItems = "Start";
    } else if (x == 2) {
        c.style.alignItems = "Center";
    } else if (x == 3) {
        c.style.alignItems = "End";
    }
}

function fg(flexgrowinput) {
    if (flexgrowinput == 1) {
        grow = 0
        box1.style.flexGrow = grow;
        box2.style.flexGrow = grow;
        box3.style.flexGrow = grow;
    }
    else if (flexgrowinput == 2) {
        box1.style.flexGrow = Number(1) + Number(box1.style.flexGrow);
        box2.style.flexGrow = Number(1) + Number(box2.style.flexGrow);
        box3.style.flexGrow = Number(1) + Number(box3.style.flexGrow);
    }
}

function boxOne(boxoneinput) {
    box1.style.flexGrow = boxoneinput;
}

function boxTwo(boxtwoinput) {
    box2.style.flexGrow = boxtwoinput;
}

function boxThree(boxthreeinput) {
    box3.style.flexGrow = boxthreeinput;
}
