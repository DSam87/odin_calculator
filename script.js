// Get buttons
let buttons = document.querySelectorAll(".button");
// Get Screen Text Elemen / Node
let screenText = document.querySelector(".number-size");
// Current Screen Amount
let currentValue = screenText.textContent;
// Current Operation
let operation = undefined;

//Operands
let operandOne = undefined;
let operandTwo = undefined;

buttons.forEach((el) => el.addEventListener("click", checkInput));

function checkInput(el) {
  setOperation(el);
  if (el.target.textContent !== "=") {
    currentValue += el.target.textContent.toString();
  }
  calculat(el);
  clearAll(el);
  updateScreen();
}

function updateScreen() {
  screenText.textContent = currentValue.toString();
}

function setOperation(el) {
  let operationCheck = el.target.textContent;
  switch (operationCheck) {
    case "+":
      operation = "+";
      break;
    case "*":
      operation = "*";
      break;
    case "-":
      operation = "-";
      break;
    case "/":
      operation = "/";
      break;
    case "%":
      operation = "%";
      break;
  }
}

function calculat(el) {
  if (operation && el.target.textContent == "=") {
    // get string and split to get operandOne and operandTwo
    let [cleanOperandOne, cleanOperandTwo] =
      currentValue.split(/(?=[-+*\%√/])/);
    let newValue;

    switch (operation) {
      case "+":
        operandOne = cleanOperandOne.replace("+", "");
        operandTwo = cleanOperandTwo.replace("+", "");

        newValue = Number(operandOne) + Number(operandTwo);
        currentValue = newValue;
        console.log(newValue);
        clearAll(el);
        updateScreen();
        break;
      case "*":
        operandOne = cleanOperandOne.replace("*", "");
        operandTwo = cleanOperandTwo.replace("*", "");
        console.log(operandOne, operandTwo);
        newValue = Number(operandOne) * Number(operandTwo);
        currentValue = newValue;
        console.log(newValue);
        clearAll(el);
        updateScreen();
        break;
      case "-":
        operandOne = cleanOperandOne.replace("-", "");
        operandTwo = cleanOperandTwo.replace("-", "");

        console.log(Number(operandOne), Number(operandTwo));
        newValue = Number(operandOne) - Number(operandTwo);
        currentValue = newValue;
        console.log(newValue, "new value");
        clearAll(el);
        updateScreen();
        break;
      case "/":
        operandOne = cleanOperandOne.replace("/", "");
        operandTwo = cleanOperandTwo.replace("/", "");

        console.log(Number(operandOne), Number(operandTwo));
        newValue = Number(operandOne) / Number(operandTwo);
        currentValue = newValue;
        console.log(newValue, "new value");
        clearAll(el);
        updateScreen();
        break;
      case "%":
        operandOne = cleanOperandOne.replace("%", "");
        operandTwo = cleanOperandTwo.replace("%", "");

        console.log(Number(operandOne), Number(operandTwo));
        newValue = Number(operandOne) % Number(operandTwo);
        currentValue = newValue;
        console.log(newValue, "new value");
        clearAll(el);
        updateScreen();
        break;
      default:
        operation = undefined;
        break;
    }
  }
}

function resetOperation() {}

function clearAll(el) {
  let button = el.target.textContent;
  if (button === "C") {
    screenText.textContent = "";
    currentValue = "";
    operation = undefined;
    operandOne = undefined;
    operandTwo = undefined;
    updateScreen();
  }
}
