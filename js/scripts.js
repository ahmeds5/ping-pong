// Business Logic

var pingPong = function(userNumber){
  var result = [];
  for(var i = 1; i <= userNumber; i++){
      if(i % 15 === 0) {
        result.push('ping-pong');
    } else {
        result.push(i);
    }
  }

  return result;
};



//User Logic
$(document).ready(function() {
  $("#pingPong").submit(function() {
    $("#output").empty();
    var userNumber= parseInt($("#userInput").val());
    var output= pingPong(userNumber);

    output.forEach(function(item) {
      $("#output").append("<li>" + item + "</li>" )

    });
    event.preventDefault();

  });

});
