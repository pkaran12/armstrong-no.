
function checkArmstrong(){
    num = document.getElementById("number").value;
    var Number = num;
    var digits = 0;
    while(num > 0){
    digits = digits + 1;
    num = parseInt(num/10);
    }
    num = Number;
    var sum = 0;  
    while(num > 0) {
    var digit = num%10;
    sum = sum + Math.pow(digit, digits);
    num = parseInt(num/10);
    }
    if(sum == Number){
    document.getElementById("result").innerHTML = "The number: " + Number + " is Armstrong Number";
    }else{
    document.getElementById("result").innerHTML = "The number: " + Number + " is NOT Armstrong Number";
    }
    }