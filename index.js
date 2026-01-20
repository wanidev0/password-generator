const btnGenEl = document.querySelector('.btn-gen');
const firstPasswordEl = document.querySelector('.pw1');
const secondPasswordEl = document.querySelector('.pw2');
const inputPasswordLengthEl = document.querySelector('.input-pw-len');

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let PASSWORD_LENGTH = 15;

const getRandomPassword = () => {
    const getRandomNumber = () => Math.floor(Math.random() * characters.length);

    let randomPassword = "";

    for (let i = 0; i < PASSWORD_LENGTH; i++) {
        randomPassword += characters[getRandomNumber()];
    }

    return randomPassword;
}

btnGenEl.addEventListener('click', () => {
    firstPasswordEl.textContent = getRandomPassword();
    secondPasswordEl.textContent = getRandomPassword();

    
});

inputPasswordLengthEl.addEventListener('change', () => {
    let pwLen = Number(inputPasswordLengthEl.value);

    if (pwLen < 6) {
        inputPasswordLengthEl.value = '6'
        alert('Password minimum length is 6')
        PASSWORD_LENGTH = 6;
    } else if (pwLen > 15) {
        inputPasswordLengthEl.value = '15'
        alert('Password minimum length is 15')
        PASSWORD_LENGTH = 15;
    } else {
        PASSWORD_LENGTH = pwLen;
    }
});