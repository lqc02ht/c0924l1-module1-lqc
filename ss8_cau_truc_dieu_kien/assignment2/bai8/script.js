function check() {
    let age = parseFloat(document.getElementById("age").value);
    if (age > 0 && age < 120) {
        document.getElementById("result").innerText = "Đây là tuổi của một người bình thường!";
    } else {
        document.getElementById("result").innerText = "Đây không phải là tuổi của một người bình thường!";
    }
}