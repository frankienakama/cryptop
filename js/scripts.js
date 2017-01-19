//backend
var converter = function(input) {
  input = input.replace(/[\W|_]/g, "");

  var lengthOfInput = input.length;
  lengthSqrt = Math.sqrt(lengthOfInput);
  if (lengthSqrt % 1 === 0){ //perfect square!!!
    var array = input.split("");
    var square = [];
    for(i = 1; i <= lengthSqrt; i++ ){
      square[i-1] = array.slice((i-1) * lengthSqrt, i * lengthSqrt)
    }
  }
};



//frontend
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = $("#user-input").val();
    var result = converter(userInput);
    $("#encryptedText").text(result);
  })
})
