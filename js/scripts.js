//backend
var converter = function(input) {
  input = input.replace(/[\W|_]/g, "");

  var lengthOfInput = input.length;
  lengthSqrt = Math.sqrt(lengthOfInput);
  if(lengthSqrt % 1 !== 0){
    lengthSqrt=Math.ceil(lengthSqrt);
    alert(lengthSqrt);
    var array = input.split("");
    var square = [];
    for(var ind = 1; ind <= lengthSqrt; ind++ ){
      square[ind-1] = array.slice((ind-1) * lengthSqrt, ind * lengthSqrt);
    }
    var output=[];
    for (var i=0; i<=lengthSqrt-1; i++){
      for (var j=0; j<=lengthSqrt-1; j++){
        output = output.concat([square[j][i]]);
      }
    }
  }
  var array = input.split("");
  var square = [];
  for(var ind = 1; ind <= lengthSqrt; ind++ ){
    square[ind-1] = array.slice((ind-1) * lengthSqrt, ind * lengthSqrt);
  }
  var output=[];
  for (var i=0; i<=lengthSqrt-1; i++){
    for (var j=0; j<=lengthSqrt-1; j++){
      output = output.concat([square[j][i]]);
    }
  }
  return output.join("");
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
