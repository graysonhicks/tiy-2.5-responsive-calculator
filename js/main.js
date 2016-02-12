// Calculator Object?

// Use switch and cases?
//is number function return Number(n) === n
//As function

var calculator = function(){
  this.sum = 0;
  this.add = function(value) {
    this.sum += value;
    return this;
  };
  this.subtract = function(value) {
    this.sum -= value;
    return this;
  };
  this.multiply = function(value) {
    this.sum *= value;
    return this;
  };
  this.divide = function(value) {
    this.sum /= value;
    return this;
  };
  this.clear = function() {
    this.sum = 0;
  };
  this.equals = function() {
    return this.sum;
  };
  return this;
};



// Long else if statements with different button names? with operators inside?

//BUTTONS

// GET BUTTON
var numberButtons = document.getElementsByClassName("numbers"); // Number buttons
var operatorButtons = document.getElementsByClassName("operators"); //Operator buttons
var equalButton = document.getElementById("equal"); // Equal button
var operatorPushed = false; //flag to determine if operator has just been pushed
var numberPushed = false; //flag to determine if number has just been pushed
var equation = ""; //var to hold for building equation

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
    var value = this.attributes.value.nodeValue;
    var isAcButton;

    if (this.attributes.value.nodeValue == "ac"){
      isAcButton = true;
      displayNumber(value, isAcButton);
    } else {
      isAcButton = false;
      displayNumber(value, isAcButton);
      }

}

  // OPERATOR BUTTON HANDLER
function operatorButtonHandler(button){
  var operand = document.getElementById("display");
  operand = operand.value;
  var value = this.attributes.value.nodeValue;

  if (numberPushed === false) {
    alert("Please hit a number first!");
  } else {

    switch (value) {
    case "*":
              console.log(equation);
              console.log(operand);
              console.log(value);
              equation = equation * operand;
              console.log(equation);
              break;
    default:
      console.log(".");
    }
  operatorPushed = true; // Sets operator flag
  }
}

  // EQUAL BUTTON HANDLER
function equalButtonHandler(button) {
  var displayedNumber = document.getElementById("display");

  if (numberPushed === false) {
    alert("Please do some math first!");
  } else {
      displayedNumber.value += equation;
  }
}

  // DISPLAY FUNCTION

function displayNumber(value, isAcButton){
  var displayedNumber = document.getElementById("display");
  //if AC button is clicked
  if (isAcButton === true) {        //if clear button pushed
    displayedNumber.value = "0";    // set displayedNumber back to "0"
    equation = "";                //reset equation
    operatorPushed = false;       // set flag back to flase
  } else if (operatorPushed === true) { //if an operator has just been pushed, set to new number pushed
    displayedNumber.value = value;
    equation += value;                  //add pushed numbers to equation
    operatorPushed = false;             // set flag back to false
    numberPushed = true;
    } else if (displayedNumber.value == "0"){ // if 0 is already displayed, then set to number clicked
      displayedNumber.value = value;
      equation += value;
      console.log(equation);
      operatorPushed = false;
      numberPushed = true;
    }  else {    //otherwise, add the clicked number next in line to exiting number in display
        displayedNumber.value += value;
        equation += value;
        console.log(equation);
        operatorPushed = false;
        numberPushed = true;
      }
}
