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

console.log(calculator(0).add(90).multiply(3).equals());

// Long else if statements with different button names? with operators inside?

//BUTTONS

// GET BUTTON
var numberButtons = document.getElementsByClassName("numbers");
var operatorButtons = document.getElementsByClassName("operators");

function numberButtonHandler(button){
  // Get value from button clicked
    var value = this.attributes.value.nodeValue;

  displayNumber(value);
  console.log("clicked!");
}

// CLICK LISTENERS
for (i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", numberButtonHandler);
}

for (i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", operatorButtonHandler);
}



// Display value of number clicked in display div
function displayNumber(value){
  console.log("display!");
  console.log(value);
  var displayArea = document.getElementById("display-span");
  displayedNumber = displayArea.innerHTML;
  console.log(displayArea.innerHTML);
  //if AC button is clicked
  if (value === "ac") {
    displayedNumber = "0";
  } else if (displayedNumber === "0"){ // if 0 is already displayed, then set to number clicked
    displayedNumber = value;
  }   //otherwise, add the clicked number next in line to exiting number in display
    else {
      displayedNumber += value;
    }
}

function operatorButtonHandler(){

}
//var runningValue = displayArea.val();
//var keyPressed =
 //if (keyPressed = //a number//) {
   //
// }
