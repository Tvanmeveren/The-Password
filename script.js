// Assignment Code
var generateBtn = document.querySelector("#generate");
var outputBox = document.querySelector("#password");

// Add event listener to handle button click
generateBtn.addEventListener("click", function (event) {
  const userPrompt = promptUser();
 //sets to the function promptUser its secure
  outputBox.innerText = generatePassword(userPrompt);
});

// Write password to the #password input
function promptUser(event) {
  // added a while to set a loop if passLen isnt't met
  var passLength = 0;
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    var passPrompt = window.prompt("How long do you want your password to be ?");
    passLength = parseInt(passPrompt);
   //isNaN for if the length of password is canceled
    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      window.alert(" Password must be between 8 to 128 charecters");
    }
  }

  // set extra prompt for extra questions
  const doNumbers = window.confirm("Do you want to include numbers?");
  const doUpper = window.confirm("Do you want  uppercase letters?");
  const doLow = window.confirm("Do you want lowercase  letters?");
  const doSymbols = window.confirm("Do you want to include symbols?");
  
  
  return { doNumbers, doUpper, doLow, doSymbols, passLength };
}

function generatePassword(userPrompt) {

  const charPool = [];
  //sets all varibale from the previous results of the function
  const { doNumbers, doSymbols, doLow, doUpper, passLength } = userPrompt;
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //house the finished text
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
  //  randomizes all the all outputs
  for (let index = 0; index < passLength; index++) {
    let randomChar = charPool[Math.floor(Math.random() * charPool.length)];
    outputText.push(randomChar);
  }
  // without this return it would be undefined
  return outputText.join("");
}