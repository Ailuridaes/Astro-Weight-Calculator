function calculate() {
  var weight = document.getElementById('weight').value;
  //check if input is valid
  if(isNaN(weight)){
    document.getElementById('result').textContent = "Error: Please enter a number.";
    return;
  }

  var select = document.getElementById('planetSelect');
  var gfactor = select.options[select.selectedIndex].value;

  var result = weight * gfactor;
  document.getElementById('result').textContent = result;
}

document.getElementById('calculate').addEventListener("click", calculate);
