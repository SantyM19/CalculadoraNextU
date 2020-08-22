function ReadKeys() {

    document.getElementById("0").addEventListener("click", displayDate0);
    document.getElementById("1").addEventListener("click", displayDate1);
    document.getElementById("2").addEventListener("click", displayDate2);
    document.getElementById("3").addEventListener("click", displayDate3);
    document.getElementById("4").addEventListener("click", displayDate4);
    document.getElementById("5").addEventListener("click", displayDate5);
    document.getElementById("6").addEventListener("click", displayDate6);
    document.getElementById("7").addEventListener("click", displayDate7);
    document.getElementById("8").addEventListener("click", displayDate8);
    document.getElementById("9").addEventListener("click", displayDate9);
    document.getElementById("on").addEventListener("click", on);
    document.getElementById("sign").addEventListener("click", sign);
    document.getElementById("dividido").addEventListener("click", divide);
    document.getElementById("raiz").addEventListener("click", raiz);
    document.getElementById("por").addEventListener("click", por);
    document.getElementById("menos").addEventListener("click", rest);
    document.getElementById("punto").addEventListener("click", punto);
    document.getElementById("igual").addEventListener("click", igual);
    document.getElementById("mas").addEventListener("click", mas);

    //Function Numbers

    function displayDate0() {
        //Read Content of the Item
        var d = document.getElementById("display");
        num = "0";
        //Function ButtonEffect
        id="0";
        btnClic(id);
        //Send The New Content to Display
        document.getElementById("display").innerHTML = d.innerHTML + num;
        //Apply Conversion Float
        Conversion();
    }

    function displayDate1() {
        var d = document.getElementById("display");
        num = "1";
        id="1";
        btnClic(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    function displayDate2() {
        var d = document.getElementById("display");
        num = "2";
        id="2";
        btnClic(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    function displayDate3() {
        var d = document.getElementById("display");
        num = "3";
        id="3";
        btnClic(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    function displayDate4() {
        var d = document.getElementById("display");
        num = "4";
        id="4";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    function displayDate5() {
        var d = document.getElementById("display");
        num = "5";
        id="5";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    function displayDate6() {
        var d = document.getElementById("display");
        num = "6";
        id="6";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    function displayDate7() {
        var d = document.getElementById("display");
        num = "7";
        id="7";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    function displayDate8() {
        var d = document.getElementById("display");
        num = "8";
        id="8";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    function displayDate9() {
        var d = document.getElementById("display");
        num = "9";
        id="9";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        Conversion();
    }

    //Functions logic 

    function on() {
        id="on";
        btnClicf(id);
        document.getElementById("display").innerHTML = "0";
    }

    function sign() {
        id="sign";
        btnClicf(id);
        console.log("----");
    }

    function divide() {
        var d = document.getElementById("display");
        num = "/";
        id="dividido";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function raiz() {
        console.log("raiz");
        id="raiz";
        btnClicf(id);
    }

    function por() {
        var d = document.getElementById("display");
        num = "*";
        id="por";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function rest() {
        var d = document.getElementById("display");
        num = "-";
        id="menos";
        btnClicf(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function punto() {
        var d = document.getElementById("display");
        num = ".";
        id="punto";
        btnClic(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
        //Verifing Point Rule
        VerifiPoint();
    }

    function igual() {
        id="igual";
        btnClic(id);
        console.log("igual");
    }

    function mas() {
        var d = document.getElementById("display");
        num = "+";
        id="mas";
        btnClicmas(id);
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }
}