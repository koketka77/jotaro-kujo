function calculate() {

    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let operator = document.querySelector("#operator").value;
 
    if (operator === "+") {
      var result = num1 + num2;
    } else if (operator === "-") {
      var result = num1 - num2;
    }

    document.querySelector("#result").innerHTML = "Результат: " + result;
  }