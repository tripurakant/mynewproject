
var input = document.getElementById("p");



function myFunction() {
   
        var number =Math.floor((Math.random() * 9) + 1) +" "+Math.floor((Math.random() * 9) + 1)+" "+Math.floor((Math.random() * 9) + 1); 
    document.getElementById("demo").innerHTML = number;
    ele.innerHTML = number

    if (number%2==0) {
        input.textContent += "300 bonus";
    }
    else {
        input.textContent += "You have now 900 point";                                                
    }


    

    }
    
    count = 1000;
  button.onclick = function() {
    count -= 100;
    button.innerHTML = "Click me: " + count;
  };
    

