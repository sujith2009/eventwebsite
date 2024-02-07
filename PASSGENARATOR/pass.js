const outputElements = document.querySelector("#output");
const buttonCopy = document.querySelector("#btnCopy");
const lengthNumber = document.querySelector("#length");
const numbers = document.querySelector("#numbers");
const capital = document.querySelector("#capatial");
const smallLetters = document.querySelector("#small");
const symbols = document.querySelector("#symbol");

const frm = document.querySelector("#form-action");

buttonCopy.addEventListener("click", async () => {
  const pass = outputElements.value;

  if (pass) {
    await navigator.clipboard.writeText(pass);
    alert("Password Copied");
  } else {
    alert("No password");
  }
});

/*
ASCII- American Standard Cord For Information Interchange
65-90 - A-Z
97-122 - a-z
48 - 57 - 0 to 9

*/

function randomCharacter(min, max) {
  const n = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() + n) + min);
}
function numbersValue() {
  return randomCharacter(48, 57);
}

function capitalValue() {
  return randomCharacter(65, 90);
}

function smallValue() {
  return randomCharacter(97, 122);
}

function symbolsValue() {
  const symbolRandom = "=*!@#$%^&()<>~?|::;";
  return symbolRandom[Math.floor(Math.random() * symbolRandom.length)];
}

const functionArray = [
  {
    element: capital,
    fun: capitalValue,
  },
  {
    element: smallLetters,
    fun: smallValue,
  },
  {
    element: numbers,
    fun: numbersValue,
  },
  {
    element: symbols,
    fun: symbolsValue,
  },
];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const len = passwordLengthElement.value;
  let generatoeLength = " ";
  for (i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * functionArray.length);
    const letter = functionArray[index].fun();
    generatoeLength += letter;
  }
  outputElements.value = generatoeLength;
});
