
choice();
function choice(){
  var answer = prompt("What would you like to use(type the acronym): Basic calculator(B), Basic Long calculator(BL), Advanced calculator(A), BMI calculator(BMI) or Trip calculator(T)").toLowerCase();

  if(answer == "b" || answer == "basic calculator"){
    basic();
  }
  else if(answer == "bl" || answer == "basic Long calculator"){
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
  else{
    alert("error. Reload page");
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
    operator = prompt("Enter an operation");
    if(operator == "+"){
      number2 = parseInt(prompt("Enter a number"));
      number1 += number2;
    }
    else if(operator == "-"){
      number2 = parseInt(prompt("Enter a number"));
      number1 -= number2;
    }
    else if(operator == "*"){
      number2 = parseInt(prompt("Enter a number"));
      number1 *= number2;
    }
    else if(operator == "/"){
      number2 = parseInt(prompt("Enter a number"));
      number1 /= number2;
    }
    else if(operator == "="){
      alert(number1);
      pressedEqual = true;
    }

  }
}


function Advanced(){
  var answer = prompt("Which function would you like to us? Square Root(sr) or Power(p).").toLowerCase();
  if(answer == "sr" || answer == "square root"){
    var number1 = parseInt(prompt("Enter a number"));
    number1 = Math.sqrt(number1);
    number1 = Math.round( number1 * 10 ) / 10;
    alert(number1);
  }

  else if(answer == "p" || answer == "power") {
    var number1 = parseInt(prompt("Enter a number"));
    var power = parseInt(prompt("Enter a power"));
    number1 = Math.pow(number1, power);
    number1 = Math.round( number1 * 10 ) / 10;
    alert(number1);
  }
  else{
    alert("error. Reload page");
  }
}

function BMI(){
  var weight = parseFloat(prompt("Type in your weight in kg"));
  var height = parseFloat(prompt("Type in your height in meters"));
  var result = (weight / height) / height;
  result = Math.round( result * 10 ) / 10;
  alert(result);
}

function Trip_calculator(){
  var distance = parseFloat(prompt("Type in How far you travelled in kilometers"));
  var fuel_consumption = parseFloat(prompt("Type in your fuel consumption"));
  var cost = parseFloat(prompt("Type in how much per litres fuel costs"));

  var result = distance/100;
  result = result * fuel_consumption;
  result = result * cost;
  result = Math.round( result * 100 ) / 100;
  alert(result);
}
