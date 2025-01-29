/*-------------------------------- Constants --------------------------------*/
const displayElement = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const buttonNumbers = document.querySelectorAll(".button.number");
const buttonOperators = document.querySelectorAll(".button.operator");
const buttonEquals = document.querySelector(".button.equals");
const buttonClear = document.querySelector(".button.clear");
const calculator = document.querySelector('.calculator');
const handleInput = (event) => {
};
const maths = (number1, number2, operator) => {
  const math = {
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
  };
  return math[operator](+number1, +number2);
};



/*-------------------------------- Variables --------------------------------*/
let currentInput = "";
let operator = "";
let previousInput = "";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttonEquals.addEventListener('click', () => {
  console.log(currentInput)
  console.log(operator)
  console.log(previousInput)
  if (currentInput !== "") {
    if (previousInput !== "") {
      if (operator !== "") {

      displayElement.textContent = maths(previousInput, currentInput, operator);
      operator = "";
      currentInput = "";
    } console.log(buttonEquals)
  }
}});

buttonClear.addEventListener('click', () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  displayElement.textContent = "";
});
// /*-------------------------------- Functions --------------------------------*/
buttonNumbers.forEach((num) => {
  num.addEventListener('click', () => {
    currentInput = num.innerText;
    displayElement.textContent = currentInput;
  });
});
buttonOperators.forEach((op) => {
  op.addEventListener('click', () => {
    if (currentInput !== "") {
      if (previousInput !== "") {
        if (operator !== "")
        previousInput = maths(previousInput, currentInput, operator);
      } else {
        previousInput = currentInput;
      }
    }
    operator = op.innerText;
    displayElement.textContent = previousInput;
    console.log(op)
    
  });
});


// buttons.forEach((button) => {
//   button.addEventListener('click', (event) => {
//     console.log(event.target.innerText);
//   });
// });


