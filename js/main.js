// Calculator Object?
// Use switch and cases?
 // CALCULATOR OBJECT (NOT USING)
// var calculator = function(){
//   this.sum = 0;
//   this.add = function(value) {
//     this.sum += value;
//     return this;
//   };
//   this.subtract = function(value) {
//     this.sum -= value;
//     return this;
//   };
//   this.multiply = function(value) {
//     this.sum *= value;
//     return this;
//   };
//   this.divide = function(value) {
//     this.sum /= value;
//     return this;
//   };
//   this.clear = function() {
//     this.sum = 0;
//   };
//   this.equals = function() {
//     return this.sum;
//   };
//   return this;
// };

// Long else if statements with different button names? with operators inside?

//BUTTONS

// GET BUTTON
var numberButtons = document.getElementsByClassName("numbers"); // Number buttons
var operatorButtons = document.getElementsByClassName("operators"); //Operator buttons
var equalButton = document.getElementById("equal"); // Equal button
var operatorPushedImmediately = false; //flag to determine if operator has just been pushed
var operatorPushedInEquation = false; //flag to determine if operator has been pushed in this equation
var numberPushed = false; //flag to determine if number has just been pushed
var equalButtonPushed = false;
var equation = []; //var to hold for building equation
var operand;
var operationValue;
var numberValue;
var displayedNumber;

// CLICK LISTENERS
for (i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", numberButtonHandler);
}

for (i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", operatorButtonHandler);
}

equalButton.addEventListener("click", equalButtonHandler);


// CLICK HANDLERS
  // NUMBER BUTTON HANDLER
function numberButtonHandler(button){
  // Get value from button clicked
    numberValue = this.attributes.value.nodeValue; //gets value from the button that has been pushed, it is stored in its html attr
    var isAcButton;

    if (this.attributes.value.nodeValue == "ac"){ // if it is the clear button
      isAcButton = true;
      displayNumber(numberValue, isAcButton); // pass the value and a boolean to displayNumber
    } else {
      isAcButton = false;
      displayNumber(numberValue, isAcButton);
      }

}

  // OPERATOR BUTTON HANDLER
function operatorButtonHandler(button){
  operand = document.getElementById("display"); // set operand as whatever the displayed number is
  operand = operand.value;
  operationValue = this.attributes.value.nodeValue;
  if (operationValue === "%") {
    doMath();
  }
  console.log(operand + "operand after operator pushed");
  console.log(operationValue);
  if (numberPushed === false) {
      alert("Please hit a number first!");
    }
  operatorPushedImmediately = true; // Sets operator flag
      }

  // EQUAL BUTTON HANDLER
function equalButtonHandler(button) {
  displayedNumber = document.getElementById("display");

  if (numberPushed === false) {
    alert("Please do some math first!");
  } else {
      console.log("equals!");
      operatorPushedInEquation = false; // tells program that equation is over
      doMath();
  }
}

  // DISPLAY FUNCTION

function displayNumber(numberValue, isAcButton){
  displayedNumber = document.getElementById("display");
  //if AC button is clicked
  if (isAcButton === true) {        //if clear button pushed
    displayedNumber.value = "0";    // set displayedNumber back to "0"
    equation = "";                //reset equation
    operatorPushedImmediately = false;       // set flags back to false
    operatorPushedInEquation = false;
  } else if (equalButtonPushed === true){ // IF EQUAL IS PUSHED (some operators sets equal to pushed without pushing it)
        if (operationValue === "%") { // if you are jsut getting the percent of a previously entered number then allow next number pushed to clear screen
            displayedNumber.value = numberValue;
            operand = numberValue;   //grab percented number and store as operand
            equation = operand; // push previously stored operand over to be stored as 'equation'
            console.log(operand + "operand after percent hit");
            console.log(equation + "equation after percent hit");
            operatorPushedImmediately = true;             // set flag back to false
            operationValue = "";
            equalButtonPushed = false; // set this since technically is hasnt been pushed, but doMath set it to true
          } else {  // otherwise
              console.log(numberValue + "to display");
              displayedNumber.value = numberValue;
              operatorPushedImmediately = true;
              equalButtonPushed = false;
          }
      } else if (operatorPushedImmediately === true) { //if an operator has just been pushed, set display to new number pushed
        displayedNumber.value = numberValue;
        equation = operand; // push previously stored operand over to be stored as 'equation'
        operand = numberValue;     //add pushed numbers to operand
        operatorPushedImmediately = false;             // set flag back to false
        numberPushed = true;
          } else if (displayedNumber.value == "0"){ // if 0 is already displayed, then set to number clicked
            displayedNumber.value = numberValue;
            operand = numberValue; // store as operand
            console.log(operand);
            operatorPushedImmediately = false;
            numberPushed = true;
            }  else {    //otherwise, add the clicked number next in line to exiting number in display
              displayedNumber.value += numberValue;
              operatorPushedImmediately = false;
              numberPushed = true;
            }
}

function doMath(){
  console.log(equation + "do math equation before parse int");
  console.log(operand+ "do math operand before parse int");
  equation = parseInt(equation);
  operand = parseInt(operand);
  console.log(equation + "do math equation after parse int");
  console.log(operand+ "do math operand after parse int");
  switch (operationValue) {
    case "%":
      numberValue = (operand / 100);
      console.log(numberValue);
      break;
    case "/":
      numberValue = equation / operand;
      break;
    case "-":
      numberValue = equation - operand;
      break;
    case "+":
      numberValue = equation + operand;
      break;
    case "*":
      numberValue = equation * operand;
      break;
    }
  // send result to displayNumber function
  equalButtonPushed = true;
  displayNumber(numberValue, false);
}
