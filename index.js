$(function(){

  $("#calculate").click(function() {
    var resultDiv = $("#result");
    var weight = $("#weight").val();

    resultDiv.removeClass();
    
    //check if input is valid
    if(isNaN(weight)){
      resultDiv.addClass('error').text('Error: Please enter a number.');
      return;
    }else if(weight < 0){
      resultDiv.addClass('error').text("Error: Please enter a positive number.");
      return;
    }

    var result = (weight * $("#planetSelect").val()).toFixed(2);
    resultDiv.html('You would weigh ' + result + ' ' + $("#units").val() + '!');
  });

});
