var change = document.getElementById("tripura");
var display = document.getElementById("kant")
var point= 1000;

function randomizer()
{
  if (point > 0){
    point -= 100;
    display.textContent = "You have " + point + "INR.";

    let a = Math.floor((Math.random() * 10));
    let b = Math.floor((Math.random() * 10));
    let c = Math.floor((Math.random() * 10));

    document.getElementById("demo1").textContent = a;
    document.getElementById("demo2").textContent = b;
    document.getElementById("demo3").textContent = c;

    if (a == b && b == c){    
      tripura.textContent = "JACKPOT! + 1000";
      point += 1000;
      tripura.style.color = "blue"
      
    } else if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0){
      tripura.textContent ="All Even! + 300";
      point += 300;
      tripura.style.color = "blue"

    } else if (a % 2 == 1 && b % 2 == 1 && c % 2 == 1){
      tripura.textContent ="All Odd! + 300";
      point += 300;
      tripura.style.color = "blue"
      
    }else{
    
      if(checkSequence(a,b,c)){      
        tripura.textContent ="Diff of ONE! + 800";
        point += 800;
        tripura.style.color = "blue"
      } else {
        tripura.style.color = "red"
        tripura.textContent = "No Prize"
      }
    }

    display.textContent = "You have " + point + "INR.";
  }else {
     tripura.textContent = "NOT ENOUGH INR."
  }
}

function checkSequence(a,b,c){
  let number = a.toString() + b.toString() + c.toString()
  var numbers = "0123456789";
  var numbersRev = "9876543210";
  let seq = numbers.indexOf(String(number)) > -1;
  let revSeq = numbersRev.indexOf(String(number)) > -1;
  return seq || revSeq;
}