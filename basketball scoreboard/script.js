function addPointHandler(elemId, val) {
    let prevVal = document.getElementById(elemId).textContent
    prevVal = Number(prevVal);
    document.getElementById(elemId).textContent = prevVal + val
}
function resetGame() {
    document.getElementById("num1-el").textContent = 0
    document.getElementById("num2-el").textContent = 0
}
