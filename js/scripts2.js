$(document).ready(function(){
// debugger;
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var inputnumber = parseInt($("#number").val());
    var narray = [];

    for(var index = 1; index <= inputnumber; index += 1){
      narray.push(index);
    }

    for(var pp = 2; pp < narray.length; pp++) {
      for(var i=0; i < narray.length; i++){
        var outnumber = narray[i];
        if(outnumber%3 === 0 && outnumber != 0){
          narray[i] = "ping";
        }
        if(outnumber%5 === 0 && outnumber != 0){
          narray[i] = "pong";
        }
        if(outnumber%15 === 0 && outnumber != 0){
          narray[i] = "pingpong";
        }
      }
    }
    document.getElementById("result").innerHTML = "";
    narray.forEach(function(sort){
    $("#result").append("<li>" + sort + "</li>");
  });


  });
});
