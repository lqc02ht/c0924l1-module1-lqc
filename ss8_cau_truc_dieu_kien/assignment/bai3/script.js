function checkNumber() {
    let number = parseFloat(document.getElementById("number").value);
    if (number > 0) {
        document.getElementById("result").innerText="Số này lớn hơn 0!"
    } else if (number === 0) {
        document.getElementById("result").innerText="Số này bằng 0!"
    } else {
        document.getElementById("result").innerText="Số này nhỏ hơn 0!"
    }
}