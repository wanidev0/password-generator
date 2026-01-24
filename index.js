const btnGen = document.querySelector('.btn-gen');
const firstPw = document.querySelector('.pw1');
const secondPw = document.querySelector('.pw2');
const inputPwLen = document.querySelector('#input-pw-len');
const spanPwLen = document.querySelector('#span-pw-len');
const inputSymbols = document.querySelector('#input-symbols');
const inputNumbers = document.querySelector('#input-numbers');
const containerPw = document.querySelector('.passwords');
const pwCopy = document.querySelector('.pw-copy');

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let pwLen = Number(inputPwLen.value);
spanPwLen.textContent = pwLen;

let withSymbols = inputSymbols.checked;
let withNumbers = inputNumbers.checked;

btnGen.addEventListener('click', () => {
    firstPw.textContent = getRandomPw();
    secondPw.textContent = getRandomPw();
    pwCopy.style.display = 'block'
});

inputPwLen.addEventListener('input', () => {
    pwLen = Number(inputPwLen.value);
    spanPwLen.textContent = pwLen;
});

inputSymbols.addEventListener('change', () => {
    withSymbols = (inputSymbols.checked) ? true : false;
});

inputNumbers.addEventListener('change', () => {
    withNumbers = (inputNumbers.checked) ? true : false;
});


containerPw.addEventListener('click', (event) => {
    if (event.target == firstPw) {
        navigator.clipboard.writeText(firstPw.textContent);
    } else if (event.target == secondPw) {
        navigator.clipboard.writeText(secondPw.textContent);
    }
});

function getRandomPw() {
    const getRandomNum = () => Math.floor(Math.random() * characters.length);

    let randomPw = "";
    const isNum = (char) => char >= 0 && char <= 9;
    const isAlpha = (char) => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');


    if (withSymbols && withNumbers) {
        for (let i = 0; i < pwLen; i++) {
            randomPw += characters[getRandomNum()];
        }
    } else if (!withSymbols && withNumbers) {
        let randomChar = ''
        const isNumber = randomChar >= 0 && randomChar <= 9;
        for (let i = 0; i < pwLen; i++) {
            randomChar = characters[getRandomNum()];
            if (isNum(randomChar) || isAlpha(randomChar)) {
                randomPw += randomChar;
            } else {
                i--;   
            }
        }
    } else if (withSymbols && !withNumbers) {
        let randomChar = '';
        for (let i = 0; i < pwLen; i++) {
            randomChar = characters[getRandomNum()];
            if (!isNum(randomChar)) {
                randomPw += randomChar;
            } else {
                i--;
            }
        }
    } else {
        let randomChar = ''
        const isNumber = randomChar >= 0 && randomChar <= 9;
        for (let i = 0; i < pwLen; i++) {
            randomChar = characters[getRandomNum()];
            if (isAlpha(randomChar)) {
                randomPw += randomChar;
            } else {
                i--;   
            }
        }
    }

    return randomPw;
}