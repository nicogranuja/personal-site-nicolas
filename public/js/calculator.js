"use strict";
//variables
var buttonsNumbers = document.getElementsByClassName('buttonsNum');
var buttonsOperator = document.getElementsByClassName("buttonsOperator");
var buttonsAction = document.getElementsByClassName("buttonsAction");
var leftInput = document.getElementById("leftInput");
var middleInput = document.getElementById("operator");
var rightInput = document.getElementById("rightInput");
var textResult = document.getElementById("textResult");
var saveThis = 0;
// variables

//function that will register the array of buttons.
function registerButtons() {
	disableButtons();
	for (var i = 0; i < buttonsNumbers.length; i++) {
		buttonsNumbers[i].addEventListener('click', doButtonsNum);
	}
	for (var i = 0; i < buttonsOperator.length; i++) {
		buttonsOperator[i].addEventListener('click', doButtonsOperator);
	}
	for (var i = 0; i < buttonsAction.length; i++) {
		buttonsAction[i].addEventListener('click', doButtonsAction);
	}
}
//controls the action buttons so far = and C and buttons that work with one number
function doButtonsAction() {
	var action = this.innerText;
	switch (action) {
		case '=':
			if (operatorPressed() && weHaveInput()) { //making sure we have data to operate with
				doTheMath();
				outPutResult();
				saveResult();
				disableNumbers();
			} else {//when we have different kinds of input that don't work for the program
				alert("Empty, or wrong input please try again.");
				clearAll();
			}
			break;
		case '%':
			leftInput.value = parseFloat(leftInput.value) / 100;
			outPutResult();
			saveResult();
			disableNumbers();
			break;
		case '+/-':
			leftInput.value = parseFloat(leftInput.value) * -1;
			outPutResult();
			saveResult();
			disableNumbers();
			break;
		case '√':
			leftInput.value = Math.sqrt(parseFloat(leftInput.value));
			outPutResult();
			saveResult();
			disableNumbers();
			break;
		case 'C': //clearing the values
			clearAll();
			disableButtons();
			enableNumbers();
			break;
		default:
			//console.log("default on the switch! (doButtonsAction() method)");
	}
}
//controls the operator buttons
function doButtonsOperator() {
	//once we get an operator as an input we will enable numbers and the dot again.
	enableNumbers();
	enableDot();
	middleInput.value = this.innerText;

}
//this function will get the numbers pressed and put them in the left iput bar.
function doButtonsNum() {
	console.log("left input value"+this.innerText);
	if(this.innerText == '.'){//if condition that tests if the dot has been pressed once
		//disabling the dot so we dont have repetitions
		disableDot();
	}
	if (!operatorPressed()) {
		leftInput.value += this.innerText;
		enableButtons();
	} else {
		rightInput.value += this.innerText;
		//document.getElementById('dot').disabled = false;
	}
}

//save result will get the result and put it in the left hand side
function saveResult(){
	saveThis = parseFloat(leftInput.value);
	leftInput.value = saveThis.toFixed(2);//fixing overflow on the left value
}
//function to clear all the values.
function clearAll(){
	textResult.value ="";
	leftInput.value = "";
	rightInput.value = "";
	middleInput.value = "";
}
//function output result will print out the result of the operation in a text area and will clear the rest of the
//boxes
function outPutResult() {
	textResult.value = leftInput.value;
	//clear the rest.
	rightInput.value = "";
	middleInput.value = "";
}
//function that will work with the operands that work with the two numbers
function doTheMath() {

	var leftNumber = parseFloat(leftInput.value);
	var rightNumber = parseFloat(rightInput.value);
	switch (middleInput.value) {
		case '+':
			leftInput.value = leftNumber + rightNumber;
			break;
		case '-':
			leftInput.value = leftNumber - rightNumber;
			break;
		case '*':
			leftInput.value = leftNumber * rightNumber;
			break;
		case '/':
			if(rightNumber == 0)
				leftInput.value = 'Not a number';
			else
				leftInput.value = leftNumber / rightNumber;
			break;
		default:
			console.log("default on switch!(doTheMath() function)");
	}
}

//to input another number
function operatorPressed() {
	var pressed = false;
	if (middleInput.value != ""){
		pressed = true;
	}
	return pressed;
}
//function that will test that our fields are not empty
function weHaveInput() {
	var notEmpty = false;
	if (leftInput.value != '' && rightInput.value != '') //if both fields are not empty
		notEmpty = true;
	return notEmpty;
}
//function that will check for input on just the left side
function weHaveInput1() {
	var notEmpty = false;
	if(middleInput != '' && isNaN(leftInput.value)){//checking for input in the middle when left is NaN(empty)
		//not empty should be false and we return it.
		clearAll();
	}
	else if (leftInput.value != ''){ //if left is not empty
		notEmpty = true;
	}
	return notEmpty;
}

//disables the buttons
function disableButtons(){
	for(var i=0; i < buttonsOperator.length; i++){
		buttonsOperator[i].disabled = true;
		buttonsOperator[i].style.opacity = 0.4;
		//console.log("disabling");
	}
	for(var i=0; i < buttonsAction.length; i++){
		buttonsAction[i].disabled = true;
		buttonsAction[i].style.opacity = 0.4;
		//console.log("disabling");
	}
}
//enables the buttons
function enableButtons(){
	for(var i=0; i < buttonsOperator.length; i++){
		buttonsOperator[i].disabled = false;
		buttonsOperator[i].style.opacity = 1;
		//console.log("disabling");
	}
	for(var i=0; i < buttonsAction.length; i++){
		buttonsAction[i].disabled = false;
		buttonsAction[i].style.opacity = 1;
		//console.log("disabling");
	}
}
//disable all the numbers
function disableNumbers(){
	for(var i=0; i < buttonsNumbers.length; i++){
		buttonsNumbers[i].disabled = true;
		buttonsNumbers[i].style.opacity = 0.4;
	}
}
//enable the numbers
function enableNumbers(){
	for(var i=0; i < buttonsNumbers.length; i++){
		buttonsNumbers[i].disabled = false;
		buttonsNumbers[i].style.opacity = 1;
	}
}
function enableDot(){
	document.getElementById('dot').disabled = false;
	document.getElementById('dot').style.opacity = 1;
}

function disableDot(){
	document.getElementById('dot').disabled = true;
	document.getElementById('dot').style.opacity = 0.4;
}
registerButtons();
// console.log(buttonsNumbers);
// console.log(buttonsOperator);
// console.log(buttonsAction);
// console.log(leftInput);
// console.log(operator);
// console.log(rightInput);