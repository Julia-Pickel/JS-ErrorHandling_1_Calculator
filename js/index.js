console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorMessage = document.querySelector(".error"); //

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");
        console.log("${firstNumber} times ${secondNumber} equals to ${result}");
      }
      return a / b;
      //
    } catch (error) {
      errorMessage.textContent = error.message;
      console.log("Please pass a number rather than 0 as divisor, thank you!");
      return "Error";
    }
    //
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.textContent = ""; //
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});
