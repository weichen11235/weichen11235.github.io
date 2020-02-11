const mulBtn = document.getElementById("multiplyBtn");
const addBtn = document.getElementById("addBtn");
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const result = document.getElementById("result");

mulBtn.addEventListener("click", multiply);
function multiply(){
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);
  let outcome = value1 * value2;
  result.value = outcome;
}

addBtn.addEventListener("click", add);
function add(){
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);
  let outcome = value1 + value2;
  result.value = outcome;
}
clearBtn.addEventListener("click", clear);
function clear(){
  num1.value = "";
  num2.value = "";
  result.value = "Result";
}
