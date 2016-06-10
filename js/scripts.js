
var pigLatin = function(word) {

  var arrVowel = ["a", "e", "o", "u", "i"];
  var newArr = word.split('');

for (var i = 0; i < arrVowel.length; i++) {
  if (word.charAt(0) === arrVowel[i]) {
    var result = true;
    break;
  } else {
    var result = false
  }
}


    if (result === true) {
      var joinArr =newArr.join('');
      var output = joinArr + "ay";


      // return output;

    } else {
      newArr.shift();
      newArr.push(word.charAt(0));
      var joinArr = newArr.join("");
      var output = joinArr + "ay";
      // return output;
    }
    return output;



};


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    word = $("input#word").val();
    var result = pigLatin(word);



    $("#result").text(result);
  });
});
