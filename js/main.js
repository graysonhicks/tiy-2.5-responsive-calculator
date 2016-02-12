// Calculator Object?

/*var calculator = {
    sum: 0,
    add: function(value) {
        this.sum += value;
    },
    minus: function(value) {
        this.sum -= value;
    },
    clear: function() {
        this.sum= 0;
    },
    equals: function() {
        return this.sum;
    }
};*/


//As function

var calculator = function(val){
  this.sum = val;
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

console.log(calculator(6).add(6).equals());

// Long else if statements with different button names? with operators inside?

var displayArea = document.querySelector(".display");
var runningValue = displayArea.val();
var keyPressed =
 if (keyPressed = //a number//) {
   //
 }
