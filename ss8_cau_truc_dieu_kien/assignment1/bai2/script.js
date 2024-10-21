function checkAge() {
    let a = parseFloat(document.getElementById("age").value);
    if (a >= 15) {
        document.getElementById("result").innerText = "Học sinh đủ điều kiện vào học lớp 10!";
    } else {
        document.getElementById("result").innerText = "Học sinh không đủ điều kiện vào học lớp 10!";
    }
}