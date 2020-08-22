var num1=0;
var num2=0;
var total=0;
kind="";
//Clean Display Function
function CleanD(){
    //Read Display Num
    num1=ReadNum();
    //Clean Display
    document.getElementById("display").innerHTML="0";
}

//Read Number
function ReadNum(){
    num=document.getElementById("display").innerHTML;
    //Conv to Float
    num=parseFloat(conv);
    return num;
}

//Total
function Total(){
    //Read The Number Two
    num2=ReadNum();
    //Calculated

    if(kind=="+"){
        total=num1+num2;
    }
    else if(kind=="-"){
        total=num1-num2;
    }
    else if(kind=="*"){
        total=num1*num2;
    }
    else{
        total=num1/num2;
    }

    document.getElementById("display").innerHTML=total;
}