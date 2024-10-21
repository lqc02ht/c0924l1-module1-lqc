function findMax() {
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    let c = parseFloat(document.getElementById("number3").value);
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    document.getElementById("result").innerText = max + " là số lớn nhất!";
}