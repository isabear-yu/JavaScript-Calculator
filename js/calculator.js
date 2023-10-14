
 "use strict";
 let New_value = 0, Previous_value = 0, Previous_operation = "+"



function zero() {
                 New_value = New_value * 10 + 0
                document.getElementById("calc-display").innerHTML = New_value

            }

function one() {

                New_value = New_value * 10 + 1
                document.getElementById("calc-display").innerHTML = New_value
            }

function two() {
                New_value = New_value * 10 + 2
                document.getElementById("calc-display").innerHTML = New_value
            }



function three() {
                New_value = New_value * 10 + 3
                document.getElementById("calc-display").innerHTML = New_value
            }

function four() {

                New_value = New_value * 10 + 4
                document.getElementById("calc-display").innerHTML = New_value


            }

function five() {
                New_value = New_value * 10 + 5
                document.getElementById("calc-display").innerHTML = New_value
            }



function six() {
                New_value = New_value * 10 + 6
                document.getElementById("calc-display").innerHTML = New_value
            }



function seven(){
                New_value = New_value * 10 + 7
                document.getElementById("calc-display").innerHTML = New_value
            }

function eight() {
                New_value = New_value * 10 + 8
                document.getElementById("calc-display").innerHTML = New_value
            }

function nine() {
                New_value = New_value * 10 + 9
                document.getElementById("calc-display").innerHTML = New_value
            }

function plus() {


				switch (Previous_operation) {
            		case "+":
                		New_value = New_value + Previous_value
                		break;
            		case "-":
                		New_value = Previous_value - New_value
                		break;
            		case "*":
                		New_value = New_value * Previous_value
                		break;
            		case "/":
            			if ( New_value == 0 ) {
  							alert("Error !!!!!!!");
  							New_value = 0;
  							Previous_value = 0;
  							Previous_operation = "+";
  							break;
						}
                		else{
                			New_value = Previous_value / New_value
                			break;
                		}



        }
				document.getElementById("calc-display").innerHTML =  Math.trunc(New_value)
				Previous_operation = "+"
				Previous_value = New_value
				New_value = 0


 }

function minus(){
				switch(Previous_operation) {
            		case "+":
                		New_value = New_value + Previous_value
                		break;
            		case "-":
                		New_value = Previous_value - New_value
                		break;
            		case "*":
                		New_value = New_value * Previous_value
                		break;
            		case "/":
            			if ( New_value == 0 ) {
  							alert("Error !!!!!!!");
  							New_value = 0;
  							Previous_value = 0;
  							Previous_operation = "+";
  							break;
						}
                		else{
                			New_value = Previous_value / New_value
                			break;
                		}

        }
				document.getElementById("calc-display").innerHTML =  Math.trunc(New_value)
				Previous_operation = "-"
				Previous_value = New_value
				New_value = 0


 }



function times() {
				switch(Previous_operation) {
            		case "+":
                		New_value = New_value + Previous_value
                		break;
            		case "-":
                		New_value = Previous_value-New_value
                		break;
            		case "*":
                		New_value = New_value * Previous_value
                		break;
            		case "/":
            			if ( New_value == 0 ) {
  							alert("Error !!!!!!!");
  							New_value = 0;
  							Previous_value = 0;
  							Previous_operation = "+";
  							break;
						}
                		else{
                			New_value = Previous_value / New_value
                			break;
                		}

        }

 				document.getElementById("calc-display").innerHTML =  Math.trunc(New_value)
				Previous_operation = "*"
				Previous_value = New_value
				New_value = 0
 }

function divide() {
				switch (Previous_operation) {
            		case "+":
                		New_value = New_value + Previous_value
                		break;
            		case "-":
                		New_value = Previous_value - New_value
                		break;
            		case "*":
                		New_value = New_value * Previous_value
                		break;
            		case "/":
            			if ( New_value == 0 ) {
  							alert("Error !!!!!!!");
  							New_value = 0;
  							Previous_value = 0;
  							Previous_operation = "+";
  							break;
						}
                		else{
                			New_value = Previous_value / New_value
                			break;
                		}

        }

 				document.getElementById("calc-display").innerHTML = Math.trunc(New_value)
				Previous_operation = "/"
				Previous_value = New_value
				New_value = 0
 }


function equals(){
				switch(Previous_operation) {
            		case "+":
                		New_value = New_value + Previous_value
                		break;
            		case "-":
                		New_value = Previous_value - New_value
                		break;
            		case "*":
                		New_value = New_value * Previous_value
                		break;
            		case "/":
            			if ( New_value == 0 ) {
  							alert("Error !!!!!!!");
  							New_value = 0;
  							Previous_value = 0;
  							Previous_operation = "+";
  							break;
						}
                		else{
                			New_value = Previous_value / New_value
                			break;
                		}

        }

				document.getElementById("calc-display").innerHTML =  Math.trunc(New_value)
				New_value = 0
				Previous_value = 0
				Previous_operation = "+"
 }
