function check() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    if (a % b === 0) {
        document.getElementById("result").innerText = "a chia hết cho b";
    } else {
        document.getElementById("result").innerText = "a không chia hết cho b";
    }
}