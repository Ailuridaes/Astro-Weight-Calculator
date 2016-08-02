function calculate() {
  var resultDiv = document.getElementById('result');
  var weight = document.getElementById('weight').value;
  //check if input is valid
  if(isNaN(weight)){
    resultDiv.textContent = "Error: Please enter a number.";
    return;
  }else if(weight < 0){
    resultDiv.textContent = "Error: Please enter a positive number."
    return;
  }

  var gfactor = document.getElementById('planetSelect').value;
  var units = document.getElementById('units').value;
  var result = (weight * gfactor).toFixed(2);
  resultDiv.innerHTML = 'You would weigh ' + result + ' ' + units + '!';
}

document.getElementById("calculate").addEventListener("click", calculate);
