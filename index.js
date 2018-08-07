
choice();
function choice(){
  var answer = prompt("What would you like to use(type the acronym): Basic calculator(B), Basic Long calculator(BL), Advanced calculator(A), BMI calculator(BMI) or Trip calculator(T)");
  if(answer == "b" || answer == "basic calculator"){
    basic();
  }
  else if(answer == "bl" || answer == "Basic Long calculator"){
    basicLong();
  }
  else if(answer == "a" || answer == "advanced calculator"){
    Advanced();
  }
  else if(answer == "bmi" || answer == "bmi calculator"){
    BMI();
  }
  else if(answer == "t" || answer == "trip calculator"){
    Trip_calculator();
  }
}

function basic(){
  var number1 = parseInt(prompt("Enter first number"));
  var operator = prompt("Enter operation");
  var number2 = parseInt(prompt("Enter second number"));
  if(operator == "+"){
    console.log(number1 + number2);
    alert(number1 + number2);
  }
  else if(operator == "-"){
    console.log(number1 - number2);
    alert(number1 - number2);
  }
  else if(operator == "*"){
    console.log(number1 * number2);
    alert(number1 * number2);
  }
  else if(operator == "/"){
    console.log(number1 / number2);
    alert(number1 / number2);
  }

  else{
    console.log("Does not compute operator");

  }

}

function basicLong(){
  var number1 = parseInt(prompt("Enter first number"));
  var operator;
  var number2;
  var pressedEqual = false;
  while(!pressedEqual){
    operator = prompt("Enter operation");
    if(operator == "+"){
      number2 = parseInt(prompt("Enter number"));
      number1 += number2;
    }
    else if(operator == "-"){
      number2 = parseInt(prompt("Enter number"));
      number1 -= number2;
    }
    else if(operator == "*"){
      number2 = parseInt(prompt("Enter number"));
      number1 *= number2;
    }
    else if(operator == "/"){
      number2 = parseInt(prompt("Enter number"));
      number1 /= number2;
    }
    else if(operator == "="){
      alert(number1);
      pressedEqual = true;
    }

  }
}


function Advanced(){


}
function BMI(){


}

function Trip_calculator(){



}
