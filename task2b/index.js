//look at code
//make a list of all bugs you found

// try to fix bugs manually
// is it all fixed?
//if yes, rejoice
//if no, console.log or use debugger tool to fix them?


function add(numb1, numb2) {

  return numb1 + numb2;
}

function multiply(num1, operator, num2) {
  if (operator == "*"){
    return num1 * num2; // where is the return? //
  }
}


function hasPets(hasPet, firstName, lastName) {
  if (hasPet === "true") {
    return firstName + " " + lastName + " really does have a nice pet";
  } else {
    return firstName + " " + lastName + " " + "has no pets";
  }
}

let myAccountNumbers = {
  account1: 220, //number is defined as string
  account2: 144,
  account3: 12,
  account4: 1443,
};

function addsBalanceOfAccounts( firstAccount, secondAccount ) {
   firstAccount = myAccountNumbers["account1"];
   secondAccount = myAccountNumbers["account3"];
  return firstAccount + secondAccount;
}

function calculator(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    let answer = firstNumber + secondNumber;
    return;
  }
  if (operator === "-") {
    let answer = firstNumber - secondNumber;
    return;
  }
  if (operator === "*") {
    let answer = firstNumber * secondNumber;
    return;
  }
  if (operator === "/") {
    let answer = firstNumber / secondNumber;
    return;
  } else {
    let answer = "Invalid inputs. Try again!";
    return;
    answer;
  }
}

//  Do not change this.
add(2, 5);
multiply(5, "*", 10);
hasPets(true, "henry", "ford");
hasPets(false, "henry", "ford");
calculator(2, "+", 2);
calculator(5, "-", 3);
calculator(3, "*", 4);
calculator(15, "/", 3);
addsBalanceOfAccounts();

module.exports = { add, multiply, hasPets, addsBalanceOfAccounts, calculator };
