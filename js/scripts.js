$(document).ready(function(){
// debugger;
  $("form#pingpong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var narray = [];

    for(var index = 1; index <= number; index += 1){
      narray.push(index);
    }

    for(var pp = 2; pp < narray.length; pp++) {
      for(var i=0; i < narray.length; i++){
        var px = narray[i];
        if(px%3 === 0 && px != 0){
          narray[i] = "ping";
        }
        if(px%5 === 0 && px != 0){
          narray[i] = "pong";
        }
        if(px%15 === 0 && px != 0){
          narray[i] = "pingpong";
        }
        // // if(px%pp === 0 && px!=pp) {
        // //   narray.splice(i,1);
        // }
      }
    }

    $("#result").text(narray.join(" "));

  });
});


//
//   $("form#factorial").submit(function(event) {
//   event.preventDefault();
//   var number = parseInt($("#number").val());
//   var out = 1;
//
//   if (number < 0 || isNaN(number)){
//     $("#result").text("this will not work")
//   } else {
//     for(var beg = 1; beg <= number; beg += 1){
//       out = out * beg;
//     }
//     $("#result").text(out.toString());
//   }
// });
//
//
//   var arrVowel = ["a", "e", "o", "u", "i"];
//   var newArr = word.split('');
//
// arr.push()
//
// for (var i = 0; i < arrVowel.length; i++) {
//   if (word.charAt(0) === arrVowel[i]) {
//     var result = true;
//     break;
//   } else {
//     var result = false
//   }
// }
//
//
//     if (result === true) {
//       var joinArr =newArr.join('');
//       var output = joinArr + "ay";
//
//
//       // return output;
//
//     } else {
//       newArr.shift();
//       newArr.push(word.charAt(0));
//       var joinArr = newArr.join("");
//       var output = joinArr + "ay";
//       // return output;
//     }
//     return output;
//
//
//
// };
//
