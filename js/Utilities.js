//Float Conversion

function Conversion(){
    //Read the Display
    conv=document.getElementById("display").innerHTML;
    //Conv to Float
    conv=parseFloat(conv);
    //Conv to String and send
    document.getElementById("display").innerHTML=conv;
}

//Point Verifed

function VerifiPoint(){
    //Read the Display
    punto=document.getElementById("display").innerHTML;
    count=0;
    //Validating Rule 
    for(i=0;i<punto.length;i++){
        if (punto[i]=="."){
            count++;
        }
        if (count>1){
            punto=punto.slice(0, punto.length-1);
            i=0;
            count=0;
        }
    }
    document.getElementById("display").innerHTML=punto;
}

//Negative Nums
function Negatives(){
    //Read the Display
    conv=document.getElementById("display").innerHTML;
    //Conv to Float
    conv=parseFloat(conv);
    //Apply Negative
    conv=conv*-1+0; 
    //Conv to String and send
    document.getElementById("display").innerHTML=conv;
}

//Validating 8 Digits
function EightDigits(){
    Digits=document.getElementById("display").innerHTML;
    //ArrayLength
    if (Digits.length>8){
        Digits=Digits.slice(0, 8);
    }
    document.getElementById("display").innerHTML=Digits;
}