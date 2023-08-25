function cal_BMI() {
  

    var b = document.getElementById("height").value;
    var y = parseFloat(b);

    var c = document.getElementById("weight").value;
    var z = parseFloat(c);

    if ( isNaN(y) || isNaN(z)) {
        document.getElementById("output").innerHTML = "Please enter valid numerical values.";
        return;
    }

    var r = z / (y * y);
    var res = r * 10000;
    var ans = res.toFixed(2);
    var conclu
    if(ans<18.5){
    conclu="Underweight"
    }
    else if(ans>=18.5 && ans<=25){
        conclu="Normal"
    }
    else if(ans>=25 && ans<=30){
        conclu="Overweight";
    }
    else{
        conclu="Obese"
    }

    console.log(ans);
    document.getElementById("output").innerHTML = "BMI is " + ans + " ("+conclu+")";
}
