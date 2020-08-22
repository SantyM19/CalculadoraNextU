function Conversion(){
    //Read the Display
    conv=document.getElementById("display").innerHTML;
    //Conv to Float
    conv=parseFloat(conv);
    //Conv to String and send
    console.log(conv);
    document.getElementById("display").innerHTML=conv;
}