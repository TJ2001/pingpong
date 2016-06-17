
// global variables
var nArray = [];
// business logic
function numOutput(input){
  nArray = [];
  for(var i = 0; i <= input; i ++){
    var outString = "";
    if(i%15===0){
      outString = "pingpong";
    }
    else if(i%3===0){
      outString = "ping";
    }
    else if(i%5===0){
      outString = "pong";
    }
    else{
      outString = i.toString();
    }
    nArray.push(outString);
  }
}
// user interface logic
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("#number").val());
    numOutput(inputNumber);
    document.getElementById("result").innerHTML = "";
    for(var i = 1; i < nArray.length; i ++){
      $("#result").append("<li>" + nArray[i] + "</li>");
    }
  });
});
