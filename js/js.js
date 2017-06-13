function palindrome() {
  var palStr = document.getElementById('palStr').value; //getInputValue
  palStr = palStr.replace(/\s+/g, ""); //remove spaces
  palStr = palStr.replace(/[*#_:/\-,()"'.]/g, ""); //remove symbols
  palStr = palStr.toLowerCase(); //make lower case
  var palStr2 = palStr.split('').reverse().join(''); //reverse str
  if (palStr == palStr2){ //Check if first string = the reverse value
    document.getElementById("palResult").innerHTML = "This is a palindrome.";
  } else {
    document.getElementById("palResult").innerHTML = "This is NOT a palindrome.";
    }
}

function showDateTime(){
    document.getElementById("dateTimeP").innerHTML = Date();
}

function showCoords(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            document.getElementById("coordsP").innerHTML = "Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
        })
    }
    
}

function updateQuantity(x){
    document.getElementById("quantityP").innerHTML = x;
    console.log(x);
}

function price(){
    var quantity = document.getElementById("slider").value;
    document.getElementById("priceP").innerHTML = "$" + quantity * 5;
}