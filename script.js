var y =document.getElementById("p");



function myFunction() {

        var x = document.getElementById("demo"); 
        randomNum =Math.floor((Math.random() * 9) + 1) +" "+Math.floor((Math.random() * 9) + 1)+" "+Math.floor((Math.random() * 9) + 1); 
        x.innerHTML = "  " +randomNum;

        if (randomNum[0] && randomNum[1] && randomNum[2] % 2 == 0)  {
          y.innerHTML = "  " +"CONGRATS EVEN NUMBER 300 POINTS FOR YOU";
      } else {
          y.innerHTML = "  " +  "CONGRATS ODD NUMBER 300 POINTS FOR YOU";
      }
    }

    

    


