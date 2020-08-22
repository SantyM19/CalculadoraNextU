//row Class Buttons
function btnClic(x) {
    var btnClick = document.getElementById(x);

    /*Cuando se haga clic*/
    btnClick.onmousedown = function () {
        document.getElementById(x).style.width = "25%";
        document.getElementById(x).style.margin = "2%";
        document.getElementById(x).style.height = "35%";;
    };

    /*Cuando se deje de hacer clic*/
    btnClick.onmouseup = function () {
        document.getElementById(x).style.width = "29%";
        document.getElementById(x).style.margin = "0%";
        document.getElementById(x).style.height = "62.91px";
    };
}

//The other Buttons

function btnClicf(x) {
    var btnClick = document.getElementById(x);

    /*Cuando se haga clic*/
    btnClick.onmousedown = function () {
        document.getElementById(x).style.width = "20%";
        document.getElementById(x).style.margin = "1%";
        document.getElementById(x).style.height = "15%";;
    };

    /*Cuando se deje de hacer clic*/
    btnClick.onmouseup = function () {
        document.getElementById(x).style.width = "22%";
        document.getElementById(x).style.margin = "0%";
        document.getElementById(x).style.height = "62.91px";
    };
}

//Button Plus

function btnClicmas(x) {
    var btnClick = document.getElementById(x);

    /*Cuando se haga clic*/
    btnClick.onmousedown = function () {
        document.getElementById(x).style.width = "88%";
        document.getElementById(x).style.margin = "margin-left: 14px;";
        document.getElementById(x).style.height = "95%";;
    };

    /*Cuando se deje de hacer clic*/
    btnClick.onmouseup = function () {
        document.getElementById(x).style.width = "90%";
        document.getElementById(x).style.margin = "margin-left: 10px;";
        document.getElementById(x).style.height = "100%";
    };
}