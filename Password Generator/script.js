let isAlphanumeric = false
const allCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@",
    "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const alphanumericChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split('')


// let passwordLength = document.getElementById("passwordLength").value

document.getElementById("generateBtn").addEventListener("click", function () {
    let passwordLength = parseInt(document.getElementById("passwordLength").value)

    document.getElementById("password1").value = generatePassword(passwordLength)
    document.getElementById("password2").value = generatePassword(passwordLength)
})

function generatePassword(passwordLength) {
    let characters;
    let isAlphanumeric = document.getElementById("option1").checked

    if (isAlphanumeric) {
        characters = alphanumericChar
    }
    else {
        characters = allCharacters
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)
        let randomChar = characters[randomNum]
        password += randomChar
    }
    return password
}
function copyHandler() {
    let passwordLine = document.getElementById("passwordLine")
    passwordLine.textContent = this.value
}

document.getElementById("password1").onclick = copyHandler
document.getElementById("password2").onclick = copyHandler
