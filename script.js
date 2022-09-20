// Assignment Code
var generateBtn = document.querySelector("#generate");
var outputBox = document.querySelector("#password");

// This is the eventlistener for the button clicking

generateBtn.addEventListener("click", function (event) {
  const userPrompt = promptUser();
 // makes sure the password is secure
  outputBox.innerText = generatePassword(userPrompt);
});


function promptUser(event) {
  // I set up a loop for the pasword length just incase it wsasnt met. i used isNAN instead of writing out is not a number.
  var passLength = 0;
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    var passPrompt = window.prompt("Choose a password length between 8-128");
    passLength = parseInt(passPrompt);
  


    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      window.alert(" Password must be between 8 to 128 charecters");
    }
  }

  // This is where the extra questions/promps are.
  const doNumbers = window.confirm("Do you want to include numbers?");
  const doUpper = window.confirm("Do you want  uppercase letters?");
  const doLow = window.confirm("Do you want lowercase  letters?");
  const doSymbols = window.confirm("Do you want to include symbols?");
  
  
  return { doNumbers, doUpper, doLow, doSymbols, passLength };
}

function generatePassword(userPrompt) {

  const charPool = [];
  //This is where i Set the vars
  const { doNumbers, doSymbols, doLow, doUpper, passLength } = userPrompt;
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // this is where I output the text
  const outputText = [];

  const upperLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowerLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "?",
    "*",
    "<",
    ">",
    "+",
    "_",
    "-",
  ];
 
  

  function addToArray(arry, newDataArray) {
    newDataArray.forEach((item) => {
      arry.push(item);
    });
  }

  //if Statements
  if (doNumbers) addToArray(charPool, number);
  if (doLow) addToArray(charPool, lowerLetters);
  if (doUpper) addToArray(charPool, upperLetters);
  if (doSymbols) addToArray(charPool, symbols);
  if (charPool.length === 0){
    window.alert("Please choose a character type");
    return "";
  }
  //  This is where the output of the statement is
  for (let index = 0; index < passLength; index++) {
    let randomChar = charPool[Math.floor(Math.random() * charPool.length)];
    outputText.push(randomChar);
  }
  // the undefined return. 
  return outputText.join("");
}