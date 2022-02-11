document.getElementsByTagName("h1")[0].style.fontSize = "2vw";
document.getElementsByTagName("h2")[0].style.fontSize = "1vw";

function myFunction() {    
    let x = document.getElementById("formname").value;    
    let y = document.getElementById("formposition").value;    
    document.getElementById("idnombre").innerHTML = x;
    document.getElementById("idcargo").innerHTML = y;
  }