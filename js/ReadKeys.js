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

    function displayDate0() {
        var d = document.getElementById("display");
        num = "0";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate1() {
        var d = document.getElementById("display");
        num = "1";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate2() {
        var d = document.getElementById("display");
        num = "2";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate3() {
        var d = document.getElementById("display");
        num = "3";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate4() {
        var d = document.getElementById("display");
        num = "4";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate5() {
        var d = document.getElementById("display");
        num = "5";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate6() {
        var d = document.getElementById("display");
        num = "6";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate7() {
        var d = document.getElementById("display");
        num = "7";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate8() {
        var d = document.getElementById("display");
        num = "8";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }

    function displayDate9() {
        var d = document.getElementById("display");
        num = "9";
        document.getElementById("display").innerHTML = d.innerHTML + num;
    }
}